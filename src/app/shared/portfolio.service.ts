import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface Portfolio {
  name: string;
}

@Injectable()
export class PortfolioService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Portfolio[]> {
    return this.http.get<Portfolio[]>
    ('http://localhost:3000/api/portfolio');
  }
}