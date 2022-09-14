import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-margin-summary',
  templateUrl: './margin-summary.component.html',
  styleUrls: ['./margin-summary.component.css']
})
export class MarginSummaryComponent implements OnInit {

  marginAvail:number = 3570;
  marginUtil:number = 420;

  constructor() { }


  ngOnInit(): void {
  }

  refreshMargin(){
    console.log('Refreshed Margin: '+ JSON.stringify( {"MAVAIL":this.marginAvail,"MUTIL":this.marginUtil}))
  }

}
