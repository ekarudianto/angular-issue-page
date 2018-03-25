import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Comment } from '@app/models/comment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CommentService {
  constructor(private http: HttpClient) {
  }

  getComments(url: string): Observable<Comment[]> {
    console.log(url);
    return this.http.get<Comment[]>(`${url}?client_id=d2f3494288a2f59ab475&client_secret=a3bab3f3e2859f58c2b7455f741bc55b7b967117`).pipe(
      map(comments => {
        return comments.map(comment => Object.assign(new Comment(comment), comment));
      }),
      catchError(this.handleError('getComments', []))
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