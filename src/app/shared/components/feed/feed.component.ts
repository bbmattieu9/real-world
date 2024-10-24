import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { feedActions } from './store/actions';
import { combineLatest } from 'rxjs';
import { selectError, selectFeedData, selectIsLoading } from './store/reducer';
import { ActivatedRoute, Params, Router, RouterLink } from '@angular/router';
import { ErrorMessageComponent } from "../error-message/error-message.component";
import { LoadingComponent } from "../loading/loading.component";
import { environment } from '../../../../environments/environment';
import { PaginationComponent } from '../pagination/pagination.component';
import queryString from 'query-string';
import { TagListComponent } from '../tag-list/tag-list.component';

@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [CommonModule, 
            RouterLink, 
            ErrorMessageComponent, 
            LoadingComponent, 
            PaginationComponent,
            TagListComponent],
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
  limit = environment.limit;
  baseUrl = this.router.url.split('?')[0];
  currentPage: number = 0;

  constructor(private store: Store, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    
    this.route.queryParams.subscribe((params: Params) => {
      this.currentPage = Number(params['page'] || '1')
      this.fetchFeed();
    })
  }

  fetchFeed():void {

    const offset = this.currentPage * this.limit / this.limit;
   
    const parsedUrl = queryString.parseUrl(this.apiUrl);
    const stringifiedParams = queryString.stringify({
      limit: this.limit,
      offset,
      ...parsedUrl.query
    })
    console.log('[ __Offset__ ]:', offset, parsedUrl, stringifiedParams);
    const apiWithParams = `${parsedUrl.url}?${stringifiedParams}`
    this.store.dispatch(feedActions.getFeed({ url: apiWithParams }));

  }
}
