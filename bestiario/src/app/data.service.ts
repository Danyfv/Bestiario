import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private REST_API_SERVER = "https://dany99f.pythonanywhere.com";

  constructor(private http: HttpClient) { }


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  


  
  // HttpClient API get() method => Fetch employees list
  getMucche(): Observable<Mucca> {
    return this.http.get<Mucca>(this.REST_API_SERVER + '/getMucche')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }


  // // Error handling 
  handleError(error: any) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     window.alert(errorMessage);
     return throwError(errorMessage);
  }

}

export class Mucca {
  id: number | undefined;
  nome: string | undefined;
  eta: number | undefined;
}
