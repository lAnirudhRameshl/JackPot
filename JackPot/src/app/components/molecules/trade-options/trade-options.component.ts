import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ASSET_TYPES } from 'src/app/constants/asset-types';
import { AssetClassResponse } from 'src/app/models/asset-class-response';
import { DropdownModel } from 'src/app/models/dropdown-model';
import { JackpotService } from 'src/app/services/jackpot.service';

@Component({
  selector: 'app-trade-options',
  templateUrl: './trade-options.component.html',
  styleUrls: ['./trade-options.component.css']
})
export class TradeOptionsComponent implements OnInit {

  assetTypes: DropdownModel[] = [{
    option: "Loading data...",
    value: 0
  }];
  selectedAssetType: string = this.assetTypes[0].value.toString();
  assetSearch = "";
  
  @Output()
  assetTypeChangeEvent: EventEmitter<string> = new EventEmitter();
  
  @Output()
  searchAssetEvent: EventEmitter<string> = new EventEmitter();

  constructor(private jackpotService: JackpotService) { }

  ngOnInit(): void {
    this.getAssetTypes();
  }

  getAssetTypes() {
    this.jackpotService.getAssetClasses().subscribe({
      next: (response: AssetClassResponse[]) => {
        this.assetTypes = response.map(assetClass => {
          return {
            option: assetClass.assetClassName,
            value: assetClass.assetClassId
          }
        });
        this.selectedAssetType = this.assetTypes[0].value.toString();
      }
    })
  }

  assetTypeChange(assetType: String) {
    this.assetTypeChangeEvent.emit(assetType.toString());
  }

  searchAsset(assetTicker: string) {
    this.searchAssetEvent.emit(assetTicker);
  }

}
