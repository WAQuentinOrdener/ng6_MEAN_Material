import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IssueService {
  public uri = 'http://localhost:4000';

  constructor(private http: HttpClient) {}

  public getIssues(): Observable<any> {
    return this.http.get(`${this.uri}/issues`);
  }

  public getIssuesById(id: String): Observable<any> {
    return this.http.get(`${this.uri}/issues/${id}`);
  }

  public addIssue(
    title: string,
    responsible: string,
    description: string,
    severity: string
  ): Observable<any> {
    const issue = {
      title: title,
      responsible: responsible,
      description: description,
      severity: severity
    };
    return this.http.post(`${this.uri}/issues/add`, issue);
  }

  public updateIssue(
    id: String,
    title: String,
    responsible: String,
    description: String,
    severity: String,
    status: String
  ): Observable<any> {
    const issue = {
      title: title,
      responsible: responsible,
      description: description,
      severity: severity,
      status: status
    };
    return this.http.post(`${this.uri}/issues/update/${id}`, issue);
  }
  public deleteIssue(id: number): Observable<any> {
    return this.http.get(`${this.uri}/issues/delete/${id}`);
  }
}
