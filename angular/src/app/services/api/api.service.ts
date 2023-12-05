import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) { }

  get<T>(
    url: string,
    params?: HttpParams,
  ): Observable<T> {
    const options = {
      params,
    };
    return this.http.get<T>(`${environment.apiUrl}/${url}`, options);
  }

  post<T>(url: string, body?: any): Observable<T> {
    return this.http.post<T>(`${environment.apiUrl}/${url}`, body);
  }
}
