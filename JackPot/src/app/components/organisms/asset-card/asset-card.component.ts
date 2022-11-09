import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MarketMover } from 'src/app/models/market-movers.model';

@Component({
  selector: 'app-asset-card',
  templateUrl: './asset-card.component.html',
  styleUrls: ['./asset-card.component.css']
})
export class AssetCardComponent implements OnInit, OnChanges {

  @Input() asset!: MarketMover;
  @Input() assetClassId: number = 1;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['asset']) this.asset = changes['asset'].currentValue;
    if(changes['assetClassId']) this.assetClassId = changes['assetClassId'].currentValue;
  }

  ngOnInit(): void {
    this.asset = {
      name: '',
      change: 0,
      company: '',
      index: '',
      sector: '',
      last: 0,
      volume: 0
    }
  }
}
