import { Component, OnInit } from '@angular/core';
import { MarketMover } from 'src/app/models/market-movers.model';

@Component({
  selector: 'app-trade-content',
  templateUrl: './trade-content.component.html',
  styleUrls: ['./trade-content.component.css']
})
export class TradeContentComponent implements OnInit {

  assetCardDetails!: MarketMover

  constructor() { }

  ngOnInit(): void {
  }

  marketMoverAssetChange(asset: MarketMover) {
    this.assetCardDetails = asset;
  }

}
