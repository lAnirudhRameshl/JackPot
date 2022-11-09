import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MarketMover } from '../models/market-movers.model';
import { Portfolio } from '../models/portfolio.model';
import { ITrade } from '../models/trade';
import { UserAccount } from '../models/user-account.model';

@Injectable({
  providedIn: 'root'
})
export class JackpotService {

  private BASE_URL = "http://localhost:8080/jackpot/api/v1";

  private headers = new HttpHeaders().append('Authorization', `Bearer ${localStorage.getItem('jwt') ?? ""}`);

  constructor(private http: HttpClient) {
   }

  //Get Trading accounts for user by id 
  getUserAccountByUserId(userId: string): Observable<UserAccount[]> {
    return this.http.get<UserAccount[]>(`${this.BASE_URL}/account/${userId}`, { headers: this.headers});
  }


  getMostActiveMarketMovers(): Observable<MarketMover[]> {
    return this.http.get<MarketMover[]>(`${this.BASE_URL}/trade/market-movers`, { headers: this.headers});
  }

  getGainerMarketMovers(): Observable<MarketMover[]> {
    return this.http.get<MarketMover[]>(`${this.BASE_URL}/trade/market-gainers`, { headers: this.headers});
  }

  getLoserMarketMovers(): Observable<MarketMover[]> {
    return this.http.get<MarketMover[]>(`${this.BASE_URL}/trade/market-losers`, { headers: this.headers});
  }

  getPortfolioData(userId: string):Observable<Portfolio[]>{
    // console.log("#### Getting data!");
    return this.http.get<Portfolio[]>(`${this.BASE_URL}/portfolio/user/${userId}`, { headers: this.headers});
  }

  getTrades(userId: string): Observable<ITrade[]>{
    return this.http.get<ITrade[]>(`${this.BASE_URL}/trade-history/${userId}`, { headers: this.headers});
  }

  getStockDetails(ticker: string): Observable<MarketMover> {
    return this.http.get<MarketMover>(`${this.BASE_URL}/trade/${ticker}`, { headers: this.headers});
  }
}
