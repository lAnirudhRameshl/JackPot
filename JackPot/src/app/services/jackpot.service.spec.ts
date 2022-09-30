import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { JackpotService } from './jackpot.service';
import { MarketMover } from '../models/market-movers.model';
import { Portfolio } from '../models/portfolio.model';
import { ITrade } from '../models/trade';

describe('JackpotService', () => {
  let service: JackpotService;
  let httpController: HttpTestingController;

  const mockMarketMovers: MarketMover[] = [
    {
      name: 'AAPL',
      last: 163.43,
      change: 3.85,
      volume: 102.85,
    },
  ];

  const mockHoldings: Portfolio[] = [
    {
      "fund": "ABFRL",
      "units": 10,
      "avgcost": 105.15,
      "ltp": "133.45",
      "currentval": 1334.50,
      "pandl": 283,
      "netchg": "26.91",
      "daychg":"0.64"
  }
  ]

  const mockHistory: ITrade[] = [
    {
      "fund" : "NASDAQ",
      "units" : 10,
      "price" : 1163.57,
      "account" : "401K",
      "date" : new Date()
  }
  ]

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(JackpotService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getMostActiveMarketMovers function', () => {
    it('should make a GET request to "../../assets/data/most-active-market-movers.json"', () => {
      service.getMostActiveMarketMovers().subscribe({
        next: (result: MarketMover[]) => {
          expect(result).toBeTruthy();
          expect(result).toBe(mockMarketMovers);
        },
      });

      const req = httpController.expectOne(
        '../../assets/data/most-active-market-movers.json'
      );
      expect(req.request.method).toBe('GET');

      req.flush(mockMarketMovers);
    });
  });

  describe('getGainerMarketMovers function', () => {
    it('should make a GET request to "../../assets/data/gainers-market-movers.json"', () => {
      service.getGainerMarketMovers().subscribe({
        next: (result: MarketMover[]) => {
          expect(result).toBeTruthy();
          expect(result).toBe(mockMarketMovers);
        },
      });

      const req = httpController.expectOne(
        '../../assets/data/gainers-market-movers.json'
      );
      expect(req.request.method).toBe('GET');

      req.flush(mockMarketMovers);
    });
  });

  describe('getLoserMarketMovers function', () => {
    it('should make a GET request to "../../assets/data/losers-market-movers.json"', () => {
      service.getLoserMarketMovers().subscribe({
        next: (result: MarketMover[]) => {
          expect(result).toBeTruthy();
          expect(result).toBe(mockMarketMovers);
        },
      });

      const req = httpController.expectOne(
        '../../assets/data/losers-market-movers.json'
      );
      expect(req.request.method).toBe('GET');

      req.flush(mockMarketMovers);
    });
  });

  describe('getPortfolioData function', () => {
    it('should make a GET request to "../../assets/data/holdings.json"', () => {
      service.getPortfolioData().subscribe({
        next: (result: Portfolio[]) => {
          expect(result).toBeTruthy();
          expect(result).toBe(mockHoldings);
        },
      });

      const req = httpController.expectOne(
        '../../assets/data/holdings.json'
      );
      expect(req.request.method).toBe('GET');

      req.flush(mockHoldings);
    });
  });

  describe('getTrades function', () => {
    it('should make a GET request to "../assets/data/thistory.json"', () => {
      service.getTrades().subscribe({
        next: (result: ITrade[]) => {
          expect(result).toBeTruthy();
          expect(result).toBe(mockHistory);
        },
      });

      const req = httpController.expectOne(
        '../assets/data/thistory.json'
      );
      expect(req.request.method).toBe('GET');

      req.flush(mockHistory);
    });
  });
});
