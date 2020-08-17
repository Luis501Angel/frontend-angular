import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import {Department} from '../../departments/models/department';
import {Employee} from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeesDataService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      Authorization: 'Bearer ' + environment.token,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Accept: 'application/json'
    })
  };

  create(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(environment.url + '/employees', employee, this.httpOptions).pipe(retry(1),
      catchError(this.handleError));
  }

  getAll() {
    return this.http.get(environment.url + '/employees' , this.httpOptions).pipe(retry(1), catchError(this.handleError));
  }

  get(id): Observable<Employee> {
    return this.http.get<Employee>(environment.url + '/employees/' + id, this.httpOptions).pipe(retry(1), catchError(this.handleError));
  }

  delete(id) {
    return this.http.delete<Employee>(environment.url + '/employees/' + id, this.httpOptions).pipe(retry(1),
      catchError(this.handleError));
  }

  update(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(environment.url + '/employees', employee, this.httpOptions).pipe(retry(1),
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
