import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FeedComponent } from '../../../shared/components/feed/feed.component';
import { BannerComponent } from '../../../shared/components/banner/banner.component';
import { ErrorMessageComponent } from '../../../shared/components/error-message/error-message.component';
import { LoadingComponent } from '../../../shared/components/loading/loading.component';
import { PopularTagsComponent } from '../../../shared/components/popular-tags/popular-tags.component';

@Component({
  selector: 'app-your-feed',
  standalone: true,
  imports: [FeedComponent,BannerComponent, ErrorMessageComponent, LoadingComponent, PopularTagsComponent, CommonModule],
  templateUrl: './your-feed.component.html',
  styleUrl: './your-feed.component.scss'
})
export class YourFeedComponent implements OnInit {

  apiUrl: string = 'articles/feed';

  constructor() { }

  ngOnInit(): void {
    
  }

}
