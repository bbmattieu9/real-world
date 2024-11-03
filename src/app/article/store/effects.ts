import { inject } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { switchMap, map, catchError, of } from "rxjs";
import { ArticleService as SharedArticleService, DUMMY_ARTICLES } from "../../shared/data-access/article.service";
import { articleActions } from "./actions";
import { ArticleInterface } from "../../shared/types/article.interface";

export const getArticleEffect = createEffect(
    (actions$ = inject(Actions), articleSrv = inject(SharedArticleService)) => {
      return actions$.pipe(
        ofType(articleActions.getArticle),
        switchMap(({slug}) => {
          return articleSrv.getArticle(slug).pipe(
            map((article: ArticleInterface) => {
              return articleActions.getArticleSuccess({ article });
            }),
            catchError(() => {
            //   return of(articleActions.getArticleFailure());
              return of(articleActions.getArticleSuccess({ article: DUMMY_ARTICLES }));
            })
          );
        })
      );
    },
    { functional: true }
  );