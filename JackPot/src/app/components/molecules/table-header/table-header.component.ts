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
  @Output() childEmit = new EventEmitter();

  assetTypes: string[] = ASSET_TYPES;
  selectedAssetType: string = this.assetTypes[0];
  assetSearch = "";
  
  constructor() { }

  ngOnInit(): void {
  }
  callParent(data:string){
    console.log("Parent component called.."+ data);
    this.childEmit.emit(data);
  }

}

