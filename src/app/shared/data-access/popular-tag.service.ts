import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { PopularTagType } from '../types/popularTag.type';
import { environment } from '../../../environments/environment';
import { GetPopularTagsResponseInterface } from '../components/popular-tags/types/getPopularTagsResponse.interface';

export const DUMMY_TAGS: PopularTagType[] =  [
    'Lifestyle',
    'Health', 'Finance', 'All',
    'food','Technology', 'Science',
    'Automobile','Technology', 'AI',
    'Aerospace','Biology', 'Banking',
    'Military','Pharmaceutical', 'Economy',
    'Religion','Nature', 'Relationship',
  ];

@Injectable({
  providedIn: 'root'
})
export class PopularTagService {

  constructor(private _httpMessenger: HttpClient) { }

  getPopularTags(): Observable<PopularTagType[]> {
    const url = environment.BASE_URL + '/tags';
     return this._httpMessenger.get<GetPopularTagsResponseInterface>(url).pipe(
      map((response) => response.tags))
  }

}
