import { Component, Input, OnInit } from '@angular/core';
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

  displayedColumns: string[] = ['name', 'lastPrice', 'priceChange', 'volume']

  constructor() {}

  ngOnInit(): void {}
}
