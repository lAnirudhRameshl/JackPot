import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JackpotService {

  private BASE_URL = "../../assets/data";

  constructor(private http: HttpClient) { }
}
