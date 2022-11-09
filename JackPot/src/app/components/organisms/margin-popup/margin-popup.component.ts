import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

export interface Margin{
  amount: number;
  account: string;
}

@Component({
  selector: 'app-margin-popup',
  templateUrl: './margin-popup.component.html',
  styleUrls: ['./margin-popup.component.css']
})
export class MarginPopupComponent implements OnInit {
  
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  accountTypes: string[] = ['Brokerage', '401k', 'IRA', 'Roth IRA', 'HSA'];
  
  amount:number=0;
  account:string='NONE';
  toastMessage:string='';
  model: Margin = {amount: this.amount, account:this.account} ;
  
  
  constructor(public dialogRef: MatDialogRef<MarginPopupComponent>, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  addMargin(){
    console.log("margin updated "+ this.model.amount+" "+ this.model.account);
    this.dialogRef.close();
    this.toastMessage = `Margin updated! `;
        this.openSnackBar();
  }

  openSnackBar() {
    this._snackBar.open(this.toastMessage, 'Ok', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
}
