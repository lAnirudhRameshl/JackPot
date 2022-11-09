import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountResponse } from '../models/account-response';
import { AccountTypeResponse } from '../models/account-type-response';
import { AddAccountRequest } from '../models/add-account-request';
import { AssetClassResponse } from '../models/asset-class-response';
import { MarketMover } from '../models/market-movers.model';
import { Portfolio } from '../models/portfolio.model';
import { ITrade } from '../models/trade';
import { TradeRequest } from '../models/trade-request';
import { TradeResponse } from '../models/trade-response';
import { UpdateMarginRequest } from '../models/update-margin-request';

@Injectable({
  providedIn: 'root'
})
export class JackpotService {

  private BASE_URL = "http://localhost:8080/jackpot/api/v1";

  private headers = new HttpHeaders().append('Authorization', `Bearer ${localStorage.getItem('jwt') ?? ""}`);

  constructor(private http: HttpClient) {
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

  getAccountTypes(): Observable<AccountTypeResponse[]> {
    return this.http.get<AccountTypeResponse[]>(`${this.BASE_URL}/account-type`, {headers: this.headers});
  }

  getAssetClasses(): Observable<AssetClassResponse[]> {
    return this.http.get<AssetClassResponse[]>(`${this.BASE_URL}/asset-class`, {headers: this.headers});
  }

  getAccountDetails(userId: string): Observable<AccountResponse[]> {
    return this.http.get<AccountResponse[]>(`${this.BASE_URL}/account/${userId}`, {headers: this.headers});
  }

  addAccount(accountRequest: AddAccountRequest): Observable<AccountResponse> {
    return this.http.post<AccountResponse>(`${this.BASE_URL}/account`, accountRequest, {headers: this.headers});
  }

  updateMargin(updateMarginRequest: UpdateMarginRequest): Observable<AccountResponse> {
    return this.http.put<AccountResponse>(`${this.BASE_URL}/account`, updateMarginRequest, {headers: this.headers});
  }

  completeTrade(tradeRequest: TradeRequest): Observable<TradeResponse> {
    return this.http.post<TradeResponse>(`${this.BASE_URL}/trade`, tradeRequest, {headers: this.headers});
  }
}
