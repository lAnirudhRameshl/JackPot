import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Output() dropdownEvent = new EventEmitter();

  assetTypes: string[] = ASSET_TYPES;
  selectedAssetType: string = this.assetTypes[0];
  assetSearch = "";
  
  constructor() { }

  ngOnInit(): void {
  }

  searchAsset(data:string){
    console.log("Parent component called.."+ data);
    this.searchEvent.emit(data);
  }

  downloadData() {
    this.downloadEvent.emit();
  }

  changeAssetClass(assetClass: String) {
    this.dropdownEvent.emit(assetClass)
  }
}

