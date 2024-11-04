import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ArticleInterface } from '../types/article.interface';
import { ArticleResponseInterface } from '../types/articleResponse.interface';


export const DUMMY_ARTICLES: ArticleInterface =
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
    }
  

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private readonly BASE_URL = environment.BASE_URL;

  constructor(private _httpMessenger: HttpClient) {}

  getArticle(slug: string): Observable<ArticleInterface> {
    const url = `${this.BASE_URL}/articles/${slug}`;
    return this._httpMessenger.get<ArticleResponseInterface>(url).pipe(map((response) => response.article)
    );
  }

}








