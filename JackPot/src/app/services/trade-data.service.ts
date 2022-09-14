import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ITrade } from '../models/trade';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TradeDataService {

  constructor(private http: HttpClient) { }

  getTrades(): Observable<ITrade[]>{
    return this.http.get<ITrade[]>('../assets/data/thistory.json');
  }

}
