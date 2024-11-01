import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {
  private apiUrl = 'http://localhost:8080/';

  constructor(private http: HttpClient) {}

  saveSurveys(surveys: any[]): Observable<any> {
    return this.http.post(`${this.apiUrl}/save/surveys`, surveys);
  }
}
