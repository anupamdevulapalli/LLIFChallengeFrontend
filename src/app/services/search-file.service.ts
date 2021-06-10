import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpRequest, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchFileService {
  private baseUrl = 'http://localhost:8080';
  

  constructor(private http: HttpClient) { }

  search(query: string): Observable<any> {
    // console.log(query);
    let params = new HttpParams().set('query', query);
    // const req = new HttpRequest('GET', `${this.baseUrl}/search`, {params});
    // return this.http.request(req);
    return this.http.get(`${this.baseUrl}/search`, {params});
  }
}
