import { Component, Input, OnInit } from '@angular/core';
import { OnIdentifyEffects } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { feedActions } from './store/actions';
import { combineLatest } from 'rxjs';
import { selectError, selectFeedData, selectIsLoading } from './store/reducer';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ErrorMessageComponent } from "../error-message/error-message.component";
import { LoadingComponent } from "../loading/loading.component";

@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [CommonModule, RouterLink, ErrorMessageComponent, LoadingComponent],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.scss',
})
export class FeedComponent implements OnInit {
  @Input() apiUrl: string = '';
  vm$ = combineLatest({
    isLoading: this.store.select(selectIsLoading),
    error: this.store.select(selectError),
    feed: this.store.select(selectFeedData),
  });

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(feedActions.getFeed({ url: this.apiUrl }));
  }
}
