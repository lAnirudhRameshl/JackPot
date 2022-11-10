import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ACCOUNT_TYPES } from 'src/app/constants/account-types';
import { ASSET_TYPES } from 'src/app/constants/asset-types';
import { AccountTypeResponse } from 'src/app/models/account-type-response';
import { AssetClassResponse } from 'src/app/models/asset-class-response';
import { DropdownModel } from 'src/app/models/dropdown-model';
import { JackpotService } from 'src/app/services/jackpot.service';

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

  assetTypes: DropdownModel[] = [{
    option: "Loading data..",
    value: 0
  }];
  accountTypes: DropdownModel[] = [{
    option: 'Loading data...',
    value: 0
  }];
  selectedAssetType: string = this.assetTypes[0].value.toString();
  assetSearch = "";
  
  constructor(private jackpotService: JackpotService) { }

  ngOnInit(): void {
    this.getAccountTypes();
    this.getAssetClasses();
  }

  getAccountTypes() {
    this.jackpotService.getAccountTypes().subscribe({
      next: (response: AccountTypeResponse[]) => {
        this.accountTypes = response.map(accountType => {
          return {
            option: accountType.accountType,
            value: accountType.accountTypeId
          }
        });
        this.accountTypes = [{option: "All Accounts", value: 0}, ...this.accountTypes]
      }
    })
  }

  getAssetClasses() {
    this.jackpotService.getAssetClasses().subscribe({
      next: (response: AssetClassResponse[]) => {
        this.assetTypes = response.map(assetClass => {
          return {
            option: assetClass.assetClassName,
            value: assetClass.assetClassId
          }
        });
        this.assetTypes = [{option: "All Stocks", value: 0}, ...this.assetTypes]
      }
    })
  }

  searchAsset(data:string){
    this.searchEvent.emit(data);
  }

  downloadData() {
    this.downloadEvent.emit();
  }

  changeAssetClass(assetClass: String) {
    this.assetTypeEvent.emit(this.assetTypes.find((dropdownModel) => dropdownModel.value == parseInt(assetClass.toString()))?.option)
    
  }

  changeAccountType(accountType: String) {
    this.accountEvent.emit(this.accountTypes.find((dropdownModel) => dropdownModel.value == parseInt(accountType.toString()))?.option);
  }
}

