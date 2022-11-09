import { Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';
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
  
  @Output() marketMoverChangeAssetEvent: EventEmitter<MarketMover> = new EventEmitter();

  constructor(private jackpotService: JackpotService) {}

  ngOnInit(): void {
    this.getMostActiveMarketMovers();
    this.getGainerMarketMovers();
    this.getLoserMarketMovers()
  }

  getMostActiveMarketMovers() {
    this.jackpotService.getMostActiveMarketMovers().subscribe({
      next: (mostActiveMarketMovers: MarketMover[]) => {
        this.mostActiveMarketMovers = mostActiveMarketMovers.slice(0, 8);
        this.marketMoverChangeAssetEvent.emit(mostActiveMarketMovers[0]);
      },
    });
  }

  getGainerMarketMovers() {
    this.jackpotService.getGainerMarketMovers().subscribe({
      next: (gainerMarketMovers: MarketMover[]) => {
        this.gainerMarketMovers = gainerMarketMovers.slice(0, 8);
      },
    });
  }

  getLoserMarketMovers() {
    this.jackpotService.getLoserMarketMovers().subscribe({
      next: (loserMarketMovers: MarketMover[]) => {
        this.loserMarketMovers = loserMarketMovers.slice(0, 8);
      },
    });
  }

  marketMoverChangeAsset(asset: MarketMover) {
    this.marketMoverChangeAssetEvent.emit(asset);
  }
}
