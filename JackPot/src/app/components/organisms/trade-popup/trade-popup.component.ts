import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { JackpotService } from 'src/app/services/jackpot.service';
import { DropdownModel } from 'src/app/models/dropdown-model';
import { TradeRequest } from 'src/app/models/trade-request';
import { TimeScale } from 'chart.js';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { TradeResponse } from 'src/app/models/trade-response';
import { HttpErrorResponse } from '@angular/common/http';

export interface OrderData {
  isBuy: string;
  ticker: string;
  accountDropdown: DropdownModel[];
  assetClassId: number;
}
export interface ToastData {
  ticker: string;
  qty: number;
  price: number;
  account_id: string;
}

//ACCOUNT TYPE MODAL FROM API
export interface AccountType {
  accountTypeId: string;
  accountTypeName: string;
}

@Component({
  selector: 'app-trade-popup',
  templateUrl: './trade-popup.component.html',
  styleUrls: ['./trade-popup.component.css'],
})
export class TradePopupComponent implements OnInit {
  isBuyOrder: boolean = this.data.isBuy.toLowerCase() == 'true';
  currQty: number = 0;
  ticker: string = this.data.ticker;
  action: string = this.data.isBuy.toLowerCase() == 'true' ? 'BUY' : 'SELL';

  horizontalPosition: MatSnackBarHorizontalPosition = 'left';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  model: TradeRequest = {
    ticker: this.data.ticker,
    userId: parseInt(localStorage.getItem('userId') ?? '0'),
    quantity: 0,
    accountTypeId: this.data.accountDropdown[0].value,
    assetClassId: this.data.assetClassId,
  };

  constructor(
    private jackpotService: JackpotService,
    public dialogRef: MatDialogRef<TradePopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: OrderData,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  changeAccountType(accountTypeId: String) {
    this.model.accountTypeId = parseInt(accountTypeId.toString());
  }

  executeOrder66() {
    if(!this.isBuyOrder){
      this.model.quantity *= -1;
    }
    this.jackpotService.completeTrade(this.model).subscribe({
      next: (response: TradeResponse) => {
        this._snackBar.open(
          'Completed ' +
            this.action +
            ' of ' +
            this.model.quantity +
            ' quantities of ' +
            this.ticker,
          'OK',
          {
            duration: 3000,
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
          }
        );
        this.dialogRef.close();
      },
      error: (response: HttpErrorResponse) => {
        this._snackBar.open('There was an error buying stock', 'OK', {
          duration: 3000,
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        });
        console.log(response);
        
      },
    });
  }
}
