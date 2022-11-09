import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormBuilder, FormControl, Validators } from '@angular/forms';


export interface OrderData {
  isBuy: string;
  ticker: string;
}
export interface ToastData{
  ticker: string,
  qty: number,
  price: number,
  account_id:string

}

//ACCOUNT TYPE MODAL FROM API
export interface AccountType{
  accountTypeId: string,
  accountTypeName: string
}

@Component({
  selector: 'app-trade-popup',
  templateUrl: './trade-popup.component.html',
  styleUrls: ['./trade-popup.component.css'],
})
export class TradePopupComponent implements OnInit {
  isBuyOrder: boolean = true;
  currQty: number = 1;
  currPrice: number = 0;
  ticker: string = 'MSFT';
  action: string = 'SELL';
  orderData: OrderData = {isBuy:'true',ticker:'TSLA'};
  
  account_types: string[] = ['Brokerage','401K'];

  
  selectedValue: string = "1";

  account_types_from_api: AccountType[] = [
    {accountTypeId: "1",accountTypeName:"Brokerage"},
    {accountTypeId: "2",accountTypeName:"401K"},
    {accountTypeId: "3",accountTypeName:"IRA"},
    {accountTypeId: "4",accountTypeName:"ROTH-IRA"},
    {accountTypeId: "5",accountTypeName:"HSA"}
  ]

  toastData:any = {};

  model: ToastData = {ticker: this.ticker, qty:this.currQty, price: this.currPrice, account_id: this.selectedValue} ;


  constructor(public dialogRef: MatDialogRef<TradePopupComponent>,@Inject(MAT_DIALOG_DATA) public data: OrderData) {}

  ngOnInit(): void {
    
    this.orderData = this.data;
    this.ticker = this.orderData.ticker;
    this.isBuyOrder = (this.orderData.isBuy.toLowerCase() == 'true') ? true:false;
    this.model={ticker: this.ticker, qty:this.currQty, price: this.currPrice,account_id: this.selectedValue}
    if (this.isBuyOrder) {
      this.action = 'BUY';
    } else {
      this.action = 'SELL';
    }
  }

  executeOrder66() {
    console.log('Bonjour');
    console.log('Dropdown Selcted=> '+this.model.account_id)
    this.toastData = this.model;
    this.dialogRef.close();
  }
}
