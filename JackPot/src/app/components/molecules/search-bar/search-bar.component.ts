import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  assetSearch: string = "";
  
  @Output()
  searchAssetEvent: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  searchAsset(searchText: string) {
    this.searchAssetEvent.emit(searchText);
  }

}
