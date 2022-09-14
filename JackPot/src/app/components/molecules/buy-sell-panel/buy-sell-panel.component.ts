import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buy-sell-panel',
  templateUrl: './buy-sell-panel.component.html',
  styleUrls: ['./buy-sell-panel.component.css']
})
export class BuySellPanelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openTradeDialog(btnType: any){
    console.log(btnType)
    btnType.toUpperCase() == 'BUY' ? alert('buy stocks') : alert('sell stocks');
  }
  
}
