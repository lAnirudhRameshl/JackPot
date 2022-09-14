import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MarketMover } from 'src/app/models/market-movers.model';
import { JackpotService } from 'src/app/services/jackpot.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  mostActiveMarketMovers: MarketMover[] = [];
  gainerMarketMovers: MarketMover[] = [];
  loserMarketMovers: MarketMover[] = [];

  constructor(private jackpotService: JackpotService) {}

  ngOnInit(): void {
    this.getMostActiveMarketMovers();
    this.getGainerMarketMovers();
    this.getLoserMarketMovers()
  }

  getMostActiveMarketMovers() {
    this.jackpotService.getMostActiveMarketMovers().subscribe({
      next: (mostActiveMarketMovers: MarketMover[]) => {
        this.mostActiveMarketMovers = mostActiveMarketMovers;
      },
    });
  }

  getGainerMarketMovers() {
    this.jackpotService.getGainerMarketMovers().subscribe({
      next: (gainerMarketMovers: MarketMover[]) => {
        this.gainerMarketMovers = gainerMarketMovers;
      },
    });
  }

  getLoserMarketMovers() {
    this.jackpotService.getLoserMarketMovers().subscribe({
      next: (loserMarketMovers: MarketMover[]) => {
        this.loserMarketMovers = loserMarketMovers;
      },
    });
  }
}
