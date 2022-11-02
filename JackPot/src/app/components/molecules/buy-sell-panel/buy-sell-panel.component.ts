import { TradePopupComponent } from './../../organisms/trade-popup/trade-popup.component';
import { Component, Input, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

export interface OrderData {
  isBuy: string;
  ticker: string;
}



@Component({
  selector: 'app-buy-sell-panel',
  templateUrl: './buy-sell-panel.component.html',
  styleUrls: ['./buy-sell-panel.component.css']
})
export class BuySellPanelComponent implements OnInit {

  @Input() CARD_TICKER :String = "TSLA"; 

  horizontalPosition: MatSnackBarHorizontalPosition = 'left';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  returnFromDialog: any;
  toastMessage:string='';

  constructor(public dialog: MatDialog,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }


  openTradeDialog(btnType: any){
    console.log(btnType)
    // btnType.toUpperCase() == 'BUY' ? alert('buy stocks') : alert('sell stocks');


    const dialogRef = this.dialog.open(TradePopupComponent, {
      width: '22%',
      data: {isBuy: (btnType.toUpperCase() == 'BUY' ? 'true':'false'), ticker: this.CARD_TICKER},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(result){

        this.returnFromDialog = result;
        console.log(result); 
  
        this.toastMessage = `${btnType.toUpperCase()} ${this.returnFromDialog.ticker} x ${this.returnFromDialog.qty} @ ${this.returnFromDialog.price == 0 ? 'MARKET':"$"+this.returnFromDialog.price} Executed! `;
        this.openSnackBar();
      }
    });
  
    
  }

  openSnackBar() {
    this._snackBar.open(this.toastMessage, 'Ok', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
  
}


/*
  Popup Typescript
*/
