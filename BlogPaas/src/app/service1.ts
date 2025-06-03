// api.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class Service1 {
  private baseUrl = 'https://blogpaas.onrender.com/';

  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get<any[]>(`${this.baseUrl}/Uzytkownicy`);
  }
}