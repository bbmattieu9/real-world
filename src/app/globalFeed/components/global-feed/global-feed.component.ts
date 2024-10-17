import { Component, OnInit } from '@angular/core';
import { FeedComponent } from '../../../shared/components/feed/feed.component';
import { CommonModule } from '@angular/common';
import { BannerComponent } from '../../../shared/components/banner/banner.component';

@Component({
  selector: 'app-global-feed',
  standalone: true,
  imports: [FeedComponent,BannerComponent, CommonModule],
  templateUrl: './global-feed.component.html',
  styleUrl: './global-feed.component.scss'
})
export class GlobalFeedComponent implements OnInit {

  apiUrl: string = 'articles';

  constructor() { }

  ngOnInit(): void {
    
  }

}
