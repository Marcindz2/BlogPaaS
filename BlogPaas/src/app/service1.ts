import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class Service1 {
  private apiUrl = 'https://serverblog-ah1g.onrender.com'; 

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {}

  getData(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + '/', this.httpOptions);
  }
  getById(dane:any):Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${dane}`, this.httpOptions);
  }

  create(dane: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + '/', JSON.stringify(dane), this.httpOptions);
  }

  updateBlog(id: any, dane: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, JSON.stringify(dane), this.httpOptions);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}