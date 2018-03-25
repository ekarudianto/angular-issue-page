import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Issue } from '@app/models/issue';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class IssueService {
  issuesURL = 'https://api.github.com/repos/angular/angular.js';

  constructor(private http: HttpClient) {
  }

  getIssues (): Observable<Issue[]> {
    const url = `${this.issuesURL}/issues?state=all&client_id=d2f3494288a2f59ab475&client_secret=a3bab3f3e2859f58c2b7455f741bc55b7b967117`;
    return this.http.get<Issue[]>(url)
      .pipe(
        map(issues => {
          return issues.map(issue => Object.assign(new Issue(issue), issue));
        }),
        catchError(this.handleError('getIssues', []))
      );
  }

  getIssue(id: number): Observable<Issue> {
    const url = `${this.issuesURL}/issues/${id}?client_id=d2f3494288a2f59ab475&client_secret=a3bab3f3e2859f58c2b7455f741bc55b7b967117`;
    return this.http.get<Issue>(url).pipe(
      map(issue => Object.assign(new Issue(issue), issue)),
      catchError(this.handleError<Issue>(`getIssue id=${id}`))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
