import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { LoginRequest } from '../models/login-request';
import { LoginResponse } from '../models/login-response';
import { SignupRequest } from '../models/signup-request';
import { SignupResponse } from '../models/signup-response';
import { UpdateUserRequest } from '../models/update-user-request';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private BASE_URL = 'http://localhost:8080/jackpot/api/v1';

  constructor(private http: HttpClient, private router: Router) {}

  login(request: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.BASE_URL}/login`, request);
  }

  register(request: SignupRequest): Observable<SignupResponse> {
    return this.http.post<SignupResponse>(`${this.BASE_URL}/signup`, request);
  }

  updateUser(request: UpdateUserRequest): Observable<LoginResponse> {
    return this.http.put<LoginResponse>(
      `${this.BASE_URL}/${localStorage.getItem('userId') ?? '0'}`,
      request,
      {
        headers: new HttpHeaders().append(
          'Authorization',
          `Bearer ${localStorage.getItem('jwt') ?? ''}`
        ),
      }
    );
  }

  logout() {
    localStorage.clear();
    this.router.navigateByUrl("/home");
  }

  isLoggedIn(): boolean {
    if(localStorage.getItem("userId") && localStorage.getItem("userDetails") && localStorage.getItem("jwt")) {
      return true
    }
    return false;
  }
}
