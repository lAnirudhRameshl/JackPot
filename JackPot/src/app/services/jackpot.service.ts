import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MarketMover } from '../models/market-movers.model';
import { Portfolio } from '../models/portfolio.model';
import { ITrade } from '../models/trade';

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

  getPortfolioData():Observable<Portfolio[]>{
    console.log("#### Getting data!");
    return this.http.get<Portfolio[]>('http://localhost:8080/api/v1/portfolio/user/81');
  }

  getTrades(): Observable<ITrade[]>{
    return this.http.get<ITrade[]>('http://localhost:8080/jackpot/api/v1/trade-history/1');
  }
}
