import { inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, map, catchError, of } from 'rxjs';
import { DUMMY_TAGS, PopularTagService } from '../../../data-access/popular-tag.service';
import { popularTagsActions } from './action';
import { PopularTagType } from '../../../types/popularTag.type';

export const getPopularTagsEffect = createEffect(
  (actions$ = inject(Actions), popularTagsSrv = inject(PopularTagService)) => {
    return actions$.pipe(
      ofType(popularTagsActions.getPopularTag),
      switchMap(() => {
        return popularTagsSrv.getPopularTags().pipe(
          map((popularTags: PopularTagType[]) => {
            return popularTagsActions.getTpopularTagSuccess({ popularTags });
          }),
          catchError(() => {
            //   return of(popularTagsActions.getPopularTagFailure());
            return of(
              popularTagsActions.getTpopularTagSuccess({ popularTags: DUMMY_TAGS })
            );
          })
        );
      })
    );
  },
  { functional: true }
);
