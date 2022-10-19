import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ASSET_TYPES } from 'src/app/constants/asset-types';

@Component({
  selector: 'app-trade-options',
  templateUrl: './trade-options.component.html',
  styleUrls: ['./trade-options.component.css']
})
export class TradeOptionsComponent implements OnInit {

  assetTypes: string[] = ASSET_TYPES;
  selectedAssetType: string = this.assetTypes[0];
  assetSearch = "";
  
  @Output()
  assetTypeChangeEvent: EventEmitter<string> = new EventEmitter();
  
  @Output()
  searchAssetEvent: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  assetTypeChange(assetType: String) {
    this.assetTypeChangeEvent.emit(assetType.toString());
  }

  searchAsset(assetTicker: string) {
    this.searchAssetEvent.emit(assetTicker);
  }

}
