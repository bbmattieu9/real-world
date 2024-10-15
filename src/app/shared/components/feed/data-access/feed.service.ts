import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetFeedResponseInterface } from '../types/getFeedResponse.interface';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FeedService {
  private readonly BASE_URL = environment.BASE_URL;

  constructor(private _httpMessenger: HttpClient) {}

  getFeed(url: string): Observable<GetFeedResponseInterface> {
    return this._httpMessenger.get<GetFeedResponseInterface>(`${this.BASE_URL}/${url}`);
  }
}
