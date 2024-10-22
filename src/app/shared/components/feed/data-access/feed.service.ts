import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetFeedResponseInterface } from '../types/getFeedResponse.interface';
import { Observable, delay, of, tap } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { PopularTagType } from '../../../types/popularTag.type';

export const DUMMY_FEED: GetFeedResponseInterface = {
  articles: [
    {
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
      createdAt: 'Jan 20 1980',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      favorited: false,
      favoritesCount: 3,
      slug: 'sample-body-body-1',
      tagList: ['health', 'finance', 'all'],
      title: 'Learning is power if we learn',
      updatedAt: 'Jan 20 2021',
      author: {
        username: 'Babatunde Mattieu',
        bio: null,
        image:
          'https://unsplash.com/photos/a-woman-looking-out-a-window-at-the-outside-4D-VXGWOBNY',
        following: false,
      },
    },
    {
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
      createdAt: 'Feb 15 1985',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      favorited: true,
      favoritesCount: 5,
      slug: 'sample-body-body-2',
      tagList: ['technology', 'science'],
      title: 'What is the whole essence of man?',
      updatedAt: 'Feb 15 2021',
      author: {
        username: 'Alice Johnson',
        bio: 'Tech enthusiast',
        image: 'alice.jpg',
        following: true,
      },
    },
    {
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      createdAt: 'Mar 10 1990',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      favorited: false,
      favoritesCount: 0,
      slug: 'sample-body-body-3',
      tagList: ['lifestyle'],
      title: 'The cost of inner bliss, an anatomy of core existence',
      updatedAt: 'Mar 10 2021',
      author: {
        username: 'John Doe',
        bio: 'Travel blogger',
        image: 'john.jpg',
        following: false,
      },
    },
    {
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      createdAt: 'Apr 25 1995',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      favorited: true,
      favoritesCount: 10,
      slug: 'sample-body-body-4',
      tagList: ['food', 'health'],
      title: 'To what extent can man thrive?',
      updatedAt: 'Apr 25 2021',
      author: {
        username: 'Emma Brown',
        bio: 'Food lover',
        image: 'emma.jpg',
        following: true,
      },
    },
  ],
  articleCount: 4,
};



@Injectable({
  providedIn: 'root',
})
export class FeedService {
  private readonly BASE_URL = environment.BASE_URL;

  constructor(private _httpMessenger: HttpClient) {}

  getFeed(url: string): Observable<GetFeedResponseInterface> {
    return this._httpMessenger.get<GetFeedResponseInterface>(`${this.BASE_URL}/${url}`);
  }

  // might not eventually need this
  getAllFeed(): Observable<GetFeedResponseInterface> {
    return of(DUMMY_FEED).pipe(
      delay(2000),
      tap(() => console.log('[ __Found Feed__]:', DUMMY_FEED))
    );
  }
}
