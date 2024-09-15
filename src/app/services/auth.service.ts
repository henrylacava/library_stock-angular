import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  validateToken(): Observable<boolean> {
    const token = localStorage.getItem('auth-token');

    if (token) {
      return this.httpClient
        .get('http://localhost:8080/api/auth/validate')
        .pipe(
          map(() => true),
          catchError(() => of(false)),
        );
    }

    return throwError(() => 'Token not found');
  }
}
