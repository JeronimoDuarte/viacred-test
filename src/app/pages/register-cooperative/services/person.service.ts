import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private apiUrl = 'http://localhost:3000/api';
  constructor(private httpClient: HttpClient) { }

  getPerson(cpf: string): Observable<any>{
    return this.httpClient.get(`${this.apiUrl}/persons`);
  }
}
