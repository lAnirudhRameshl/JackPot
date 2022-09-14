import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Portfolio } from '../models/portfolio.model'
import { Observable } from 'rxjs';
// import {} from '../../assets/data/holdings.json'
@Injectable({
  providedIn: 'root'
})
export class PortfolioDataService {

  constructor(private http:HttpClient) { }

  getPortfolioData():Observable<Portfolio[]>{
    console.log("Inside Function...");
    return this.http.get<Portfolio[]>('../../assets/data/holdings.json');
  }
}
