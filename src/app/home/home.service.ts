import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import handleError from '../handlers/error.handler';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  url = 'https://simsave-teste.getsandbox.com/home';
  constructor(private readonly http: HttpClient) {}

  getCards(): Observable<any> {
    return this.http.get(this.url).pipe(
      retry(3),
      catchError(handleError), // then handle the error
    );
  }
}
