import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private BASE_URL: string = "";

  constructor(private http: HttpClient) { }

  login(): Observable<boolean> {
    return of(true);
  }

  register(): Observable<boolean> {
    return of(true);
  }
}
