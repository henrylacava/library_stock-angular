import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse } from '../types/login-response.type';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private httpClient: HttpClient) {}

  login(email: string, password: string) {
    return this.httpClient
      .post<LoginResponse>('http://localhost:8080/api/auth/login', {
        email,
        password,
      })
      .pipe(
        tap((value) => {
          localStorage.setItem('auth-token', value.accessToken);
        }),
      );
  }
}
