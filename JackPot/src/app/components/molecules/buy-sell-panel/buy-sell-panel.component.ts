import { TradePopupComponent } from './../../organisms/trade-popup/trade-popup.component';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { JackpotService } from 'src/app/services/jackpot.service';
import { AccountTypeResponse } from 'src/app/models/account-type-response';
import { DropdownModel } from 'src/app/models/dropdown-model';

export interface OrderData {
  isBuy: string;
  ticker: string;
}

@Component({
  selector: 'app-buy-sell-panel',
  templateUrl: './buy-sell-panel.component.html',
  styleUrls: ['./buy-sell-panel.component.css'],
})
export class BuySellPanelComponent implements OnInit, OnChanges {
  
  @Input() CARD_TICKER: String = 'TSLA';
  @Input() assetClassId: number = 1;

  horizontalPosition: MatSnackBarHorizontalPosition = 'left';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  accountTypeDropdown: DropdownModel[] = [];

  returnFromDialog: any;
  toastMessage: string = '';

  constructor(
    private jackpotService: JackpotService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['assetClassId']) this.assetClassId = changes['assetClassId'].currentValue;
  }

  ngOnInit(): void {
    this.jackpotService.getAccountTypes().subscribe({
      next: (response: AccountTypeResponse[]) => {
        this.accountTypeDropdown = response.map((accountType) => {
          return {
            option: accountType.accountType,
            value: accountType.accountTypeId,
          };
        });
      },
    });
  }

  openTradeDialog(btnType: any) {
    console.log(btnType);
    // btnType.toUpperCase() == 'BUY' ? alert('buy stocks') : alert('sell stocks');

    const dialogRef = this.dialog.open(TradePopupComponent, {
      width: '33%',
      data: {
        isBuy: btnType.toUpperCase() == 'BUY' ? 'true' : 'false',
        ticker: this.CARD_TICKER,
        accountDropdown: this.accountTypeDropdown,
        assetClassId: this.assetClassId
      },
    });
  }
}

/*
  Popup Typescript
*/
