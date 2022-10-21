import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MarketMover } from 'src/app/models/market-movers.model';

@Component({
  selector: 'app-asset-card',
  templateUrl: './asset-card.component.html',
  styleUrls: ['./asset-card.component.css']
})
export class AssetCardComponent implements OnInit, OnChanges {

  @Input() asset!: MarketMover;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.asset = changes['asset'].currentValue;
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
