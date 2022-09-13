import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MarketMover } from '../models/market-movers.model';

@Injectable({
  providedIn: 'root'
})
export class JackpotService {

  private BASE_URL = "../../assets/data";

  constructor(private http: HttpClient) { }

  getMostActiveMarketMovers(): Observable<MarketMover[]> {
    return this.http.get<MarketMover[]>(`${this.BASE_URL}/most-active-market-movers.json`);
  }

  getGainerMarketMovers(): Observable<MarketMover[]> {
    return this.http.get<MarketMover[]>(`${this.BASE_URL}/gainers-market-movers.json`);
  }

  getLoserMarketMovers(): Observable<MarketMover[]> {
    return this.http.get<MarketMover[]>(`${this.BASE_URL}/losers-market-movers.json`);
  }
}
