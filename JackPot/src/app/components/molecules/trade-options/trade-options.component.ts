import { Component, OnInit } from '@angular/core';
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

  constructor() { }

  ngOnInit(): void {
  }

}
