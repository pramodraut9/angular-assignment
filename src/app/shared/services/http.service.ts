import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private _http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return headers;
  }

  // GET request
  get<T>(url: string): Observable<T> {
    return this._http.get<T>(`${environment.apiUrl}${url}`, {
      headers: this.getHeaders(),
    });
  }

  // POST request
  post<T>(url: string, body: any): Observable<T> {
    return this._http.post<T>(`${environment.apiUrl}${url}`, body, {
      headers: this.getHeaders(),
    });
  }

  // PUT request
  put<T>(url: string, body: any): Observable<T> {
    return this._http.put<T>(`${environment.apiUrl}${url}`, body, {
      headers: this.getHeaders(),
    });
  }

  // PATCH request
  patch<T>(url: string, body: any): Observable<T> {
    return this._http.patch<T>(`${environment.apiUrl}${url}`, body, {
      headers: this.getHeaders(),
    });
  }

  // DELETE request
  delete<T>(url: string): Observable<T> {
    return this._http.delete<T>(`${environment.apiUrl}${url}`, {
      headers: this.getHeaders(),
    });
  }
}
