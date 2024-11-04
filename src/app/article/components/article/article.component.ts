import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { articleActions } from '../../store/actions';
import { combineLatest, filter, map } from 'rxjs';
import { selectArticleData, selectError, selectIsLoading } from '../../store/reducer';
import { selectCurrentUser } from '../../../auth/store/reducer';
import { CurrentUserInterface } from '../../../shared/types/currentUser.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss',
})
export class ArticleComponent implements OnInit {
  slug = this.route.snapshot.paramMap.get('slug') ?? '';

 
  isAuthor$ = combineLatest({
    article: this.store.select(selectArticleData),
    currentUser: this.store
      .select(selectCurrentUser)
      .pipe(
        filter(
          (currentUser): currentUser is CurrentUserInterface | null =>
            currentUser !== undefined
        )
      ),
  }).pipe(
    map(({ article, currentUser }) => {
      if (!article || !currentUser) {
        return false;
      }
      return article.author.username === currentUser.username;
    })
  );

  vm$ = combineLatest({
    isLoading: this.store.select(selectIsLoading),
    error: this.store.select(selectError),
    article: this.store.select(selectArticleData),
    isAuthor: this.isAuthor$
  });

  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.store.dispatch(articleActions.getArticle({ slug: this.slug }));
  }
}
