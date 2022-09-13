import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  fund: string="";

  constructor() { }

  ngOnInit(): void {
  }

  onSearch(){
    console.log(this.fund);
  }
}
