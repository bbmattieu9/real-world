import { Component, OnInit } from '@angular/core';
import { FeedComponent } from '../../../shared/components/feed/feed.component';
import { CommonModule } from '@angular/common';
import { BannerComponent } from '../../../shared/components/banner/banner.component';
import { ErrorMessageComponent } from '../../../shared/components/error-message/error-message.component';
import { LoadingComponent } from '../../../shared/components/loading/loading.component';
import { PopularTagsComponent } from '../../../shared/components/popular-tags/popular-tags.component';
import { FeedTogglerComponent } from '../../../shared/components/feed-toggler/feed-toggler.component';

@Component({
  selector: 'app-global-feed',
  standalone: true,
  imports: [FeedComponent,BannerComponent, 
            ErrorMessageComponent, 
            LoadingComponent, 
            PopularTagsComponent,
            FeedTogglerComponent, 
            CommonModule],
  templateUrl: './global-feed.component.html',
  styleUrl: './global-feed.component.scss'
})
export class GlobalFeedComponent implements OnInit {

  apiUrl: string = 'articles';

  constructor() { }

  ngOnInit(): void {
    
  }

}
