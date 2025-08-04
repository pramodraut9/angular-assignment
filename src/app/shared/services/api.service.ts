import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private _http: HttpService) {}

  getAllUsers<T>(): Observable<T> {
    return this._http.get<any>('users');
  }

  getAllProducts<T>(): Observable<T> {
    return this._http.get<any>('products');
  }
}
