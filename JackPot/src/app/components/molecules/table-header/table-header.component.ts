import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ACCOUNT_TYPES } from 'src/app/constants/account-types';
import { ASSET_TYPES } from 'src/app/constants/asset-types';

@Component({
  selector: 'app-table-header',
  templateUrl: './table-header.component.html',
  styleUrls: ['./table-header.component.css']
})
export class TableHeaderComponent implements OnInit {

  @Input() text?:string;
  @Output() searchEvent = new EventEmitter();
  @Output() downloadEvent = new EventEmitter();
  @Output() assetTypeEvent = new EventEmitter();
  @Output() accountEvent = new EventEmitter();

  assetTypes: string[] = ASSET_TYPES;
  accountTypes: string[] = ACCOUNT_TYPES;
  selectedAssetType: string = this.assetTypes[0];
  assetSearch = "";
  
  constructor() { }

  ngOnInit(): void {
  }

  searchAsset(data:string){
    this.searchEvent.emit(data);
  }

  downloadData() {
    this.downloadEvent.emit();
  }

  changeAssetClass(assetClass: String) {
    this.assetTypeEvent.emit(assetClass)
  }

  changeAccountType(accountType: String) {
    this.accountEvent.emit(accountType);
  }
}

