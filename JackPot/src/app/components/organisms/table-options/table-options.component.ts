import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ThistoryTableComponent } from '../thistory-table/thistory-table.component';

@Component({
  selector: 'app-table-options',
  templateUrl: './table-options.component.html',
  styleUrls: ['./table-options.component.css']
})
export class TableOptionsComponent implements OnInit {

  @Output() childEmit = new EventEmitter();
  @Output() childDownload = new EventEmitter();
  @Output() childAsset = new EventEmitter();
  
  @Input() count = 0;

  searchText="";
  searchAsset="";
  constructor() { }

  ngOnInit(): void {
  
  }

  search(e:any){
    this.searchText = e;
    this.callParent(this.searchText);
  }

  callParent(data:string){
    console.log("Parent component called.."+ data);
    this.childEmit.emit(data);
  }

  download(e:any){
    this.childDownload.emit(e);
  }

  asset(e:any){
    this.searchAsset=e;
    console.log("asset from table options");
    this.childAsset.emit(this.searchAsset);
  }
  
}
