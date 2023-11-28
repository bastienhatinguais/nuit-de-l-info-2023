import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = environment.apiUrl;
  private baseHeaders = new HttpHeaders().set('accept', 'application/json');
  constructor(private http: HttpClient) {}

  get<T>(
    url: string,
    params?: HttpParams,
    headers?: HttpHeaders
  ): Observable<T> {
    const options = {
      params,
      headers: this.baseHeaders,
      withCredentials: true,
    };
    return this.http.get<T>(`${this.baseUrl}/${url}`, options);
  }

  post<T>(url: string, body?: any): Observable<T> {
    const options = { headers: this.baseHeaders, withCredentials: true };
    return this.http.post<T>(`${this.baseUrl}/${url}`, body, options);
  }
}
