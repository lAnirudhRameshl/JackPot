import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MarketMover } from 'src/app/models/market-movers.model';
import { JackpotService } from 'src/app/services/jackpot.service';

@Component({
  selector: 'app-market-movers-table',
  templateUrl: './market-movers-table.component.html',
  styleUrls: ['./market-movers-table.component.css'],
})
export class MarketMoversTableComponent implements OnInit {
  @Input()
  marketMovers: MarketMover[] = [];

  @Output()
  marketMoverAssetClickEvent: EventEmitter<MarketMover> = new EventEmitter();

  displayedColumns: string[] = ['name', 'lastPrice', 'priceChange', 'volume']

  constructor() {}

  ngOnInit(): void {}

  onMarketMoverRowClick(row: MarketMover) {
    this.marketMoverAssetClickEvent.emit(row);
  }
}
