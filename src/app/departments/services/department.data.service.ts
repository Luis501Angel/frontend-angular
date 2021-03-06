import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import {Department} from '../models/department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentDataService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      Authorization: 'Bearer ' + environment.token,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Accept: 'application/json'
    })
  };

  create(department: Department): Observable<Department> {
    return this.http.post<Department>(environment.url + '/departments', department, this.httpOptions).pipe(retry(1),
      catchError(this.handleError));
  }

  getAll() {
    console.log(environment.token);
    return this.http.get(environment.url + '/departments', this.httpOptions).pipe(retry(1), catchError(this.handleError));
  }

  get(id): Observable<Department> {
    return this.http.get<Department>(environment.url + '/departments/' + id, this.httpOptions).pipe(retry(1), catchError(this.handleError));
  }

  delete(id) {
    return this.http.delete<Department>(environment.url + '/departments/' + id, this.httpOptions).pipe(retry(1),
      catchError(this.handleError));
  }

  update(department: Department): Observable<Department> {
    return this.http.put<Department>(environment.url + '/departments', department, this.httpOptions).pipe(retry(1),
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
