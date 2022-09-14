import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-table-options',
  templateUrl: './table-options.component.html',
  styleUrls: ['./table-options.component.css']
})
export class TableOptionsComponent implements OnInit {

  @Output() childEmit = new EventEmitter();

  searchText="";
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

}
