import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterRequestInterface } from '../types/registerRequest.interface';
import { Observable, map } from 'rxjs';
import { CurrentUserInterface } from '../../shared/types/currentUser.interface';
import { AuthResponseInterface } from '../types/authResponse.interface';
import { environment } from '../../../environments/environment';
import { LoginRequestInterface } from '../types/loginRequest.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly URL = environment.BASE_URL;
  private readonly REGISTER_USERS: string = 'users';
  private readonly LOGIN_USERS: string = 'users/login';

  constructor(private _httpMessenger: HttpClient) {}

  getUser(response: AuthResponseInterface): CurrentUserInterface {
    return response.user;
  }


  register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
    return this._httpMessenger
      .post<AuthResponseInterface>(`${this.URL}/${this.REGISTER_USERS}`, data)
      .pipe(map(this.getUser))
  }

  login(data: LoginRequestInterface): Observable<CurrentUserInterface> {
    return this._httpMessenger
      .post<AuthResponseInterface>(`${this.URL}/${this.LOGIN_USERS}`, data)
      .pipe(map(this.getUser))
  }
}
