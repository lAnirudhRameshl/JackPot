import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-button-trade',
  templateUrl: './button-trade.component.html',
  styleUrls: ['./button-trade.component.css'],
})
export class ButtonTradeComponent implements OnInit {
  @Input() buysell!: string;
  @Output() btnClick = new EventEmitter();

  constructor() {}

  buttonText: string = 'BUY';
  bs_style = {};

  ngOnInit(): void {
    if (this.buysell.toUpperCase() == 'BUY') {  
      this.bs_style = { 'background-color': '#44bd32', color: 'white' };
      this.buttonText = 'BUY';
    } else if(this.buysell.toUpperCase() == 'SELL'){
      this.bs_style = { 'background-color': '#e84118', color: 'white' };
      this.buttonText = 'SELL';
    }
    else{
      this.bs_style = { 'background-color': '#1cada4', color: 'white' };
      this.buttonText = 'ADD';
    }
  }

  onBtnClick() {
    this.btnClick.emit(this.buysell);
  }
}
