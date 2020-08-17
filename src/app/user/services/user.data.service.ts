import { Injectable } from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {catchError, retry} from 'rxjs/operators';
import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  httpOptions = {
    headers: new HttpHeaders({
      Authorization: 'Bearer ' + environment.token,
      'Content-Type': 'application/x-www-form-urlencoded',
      'Access-Control-Allow-Origin': '*',
      Accept: '*'
    })
  };

  constructor(private http: HttpClient) { }

  login(username, password): Observable<any> {
    const body = new HttpParams()
      .set('user', username)
      .set('password', password);

    return this.http.post(environment.url,
      body.toString(), this.httpOptions);
  }

  create(user: User): Observable<User> {
    return this.http.post<User>(environment.url + '/users', user, this.httpOptions).pipe(retry(1),
      catchError(this.handleError));
  }

  handleError(error) {
    let errorMessage;

    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }

    console.log('Ha ocurrido un error');

    return throwError(errorMessage);
  }

}
