import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { DUMMY_FEED, FeedService } from '../data-access/feed.service';
import { feedActions } from './actions';
import { switchMap, of, map, catchError } from 'rxjs';
import { GetFeedResponseInterface } from '../types/getFeedResponse.interface';

export const getFeedEffect = createEffect(
  (actions$ = inject(Actions), feedSrv = inject(FeedService)) => {
    return actions$.pipe(
      ofType(feedActions.getFeed),
      switchMap(({ url }) => {
        return feedSrv.getFeed(url).pipe(
          map((feed: GetFeedResponseInterface) => {
            return feedActions.getFeedSuccess({ feed });
          }),
          catchError(() => {
            // return of(feedActions.getFeedFailure());
            return of(feedActions.getFeedSuccess({ feed: DUMMY_FEED }));
          })
        );
      })
    );
  },
  { functional: true }
);
