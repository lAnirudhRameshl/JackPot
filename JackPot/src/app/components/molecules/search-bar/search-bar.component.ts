import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  @Output() childEmit = new EventEmitter();

  fund: string="";
  assetSearch = "";

  constructor() { }

  ngOnInit(): void {
  }

  callParent(data:string){
    console.log("Parent component called.."+ data);
    this.childEmit.emit(data);
  }
}
