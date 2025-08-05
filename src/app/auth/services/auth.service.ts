import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/shared/services/http.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _http: HttpService) {}

  login<T>(username: string, password: string): Observable<T> {
    return this._http.post<any>('auth/login', { username, password });
  }

  getProfileDetails<T>(): Observable<T> {
    return this._http.get<any>('auth/me');
  }
}
