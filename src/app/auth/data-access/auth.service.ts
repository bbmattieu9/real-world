import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterRequestInterface } from '../types/registerRequest.interface';
import { Observable, map } from 'rxjs';
import { CurrentUserInterface } from '../../shared/types/currentUser.interface';
import { AuthResponseInterface } from '../types/authResponse.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly URL = environment.BASE_URL;
  private readonly GET_USERS: string = 'users';

  constructor(private _httpMessenger: HttpClient) {}

  register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
    return this._httpMessenger
      .post<AuthResponseInterface>(`${this.URL}/${this.GET_USERS}`, data)
      .pipe(map((response) => response.user));
  }
}
