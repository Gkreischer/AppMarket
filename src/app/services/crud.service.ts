import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { environment } from './../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http: HttpClient) {
  }

  getData(route: string): Observable<any> {
    return this.http.get<any>(`${environment.baseUrl}${route}`)
      .pipe(
        tap(data => { return true }),
        catchError(this.handleError)
      );
  }

  getSpecificData(route, data): Observable<any> {
    return this.http.get(`${environment.baseUrl}${route}/${data}`).pipe(
      tap((data: any) => { return true }),
      catchError(this.handleError)
    );
  }

  postData(route: string, data): Observable<any> {
    return this.http.post<any>(`${environment.baseUrl}${route}`, { data: data }).pipe(
      tap((data: any) => console.log('Informação adicionada com sucesso.')),
      catchError(this.handleError)
    );
  }

  login(route: string, data): Observable<any> {
    return this.http.post<any>(`${environment.baseUrl}${route}`, data, httpOptions).pipe(
      tap((data: any) => {return}),
      catchError(this.handleError)
    );
  }

  deleteData(route, data): Observable<any> {
    return this.http.post(`${environment.baseUrl}${route}`, { data: data, }).pipe(
      tap((data: any) => console.log('Informacao deletada com sucesso')),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('Um erro ocorreu:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Codigo retornado do backend ${error.status}, ` +
        `body era: ${JSON.stringify(error.message)}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      `${error.status} - ${error.statusText}`);
  };
}