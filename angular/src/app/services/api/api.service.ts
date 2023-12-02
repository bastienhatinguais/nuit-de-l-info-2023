import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseHeaders = new HttpHeaders().set('accept', 'application/json');
  constructor(private http: HttpClient) { }

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
    return this.http.get<T>(`${environment.apiUrl}/${url}`, options);
  }

  post<T>(url: string, body?: any): Observable<T> {
    const options = { headers: this.baseHeaders, withCredentials: true };
    return this.http.post<T>(`${environment.apiUrl}/${url}`, body, options);
  }
}
