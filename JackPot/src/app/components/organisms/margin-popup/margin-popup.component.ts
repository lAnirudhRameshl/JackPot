import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { AccountResponse } from 'src/app/models/account-response';
import { DropdownModel } from 'src/app/models/dropdown-model';
import { UpdateMarginRequest } from 'src/app/models/update-margin-request';
import { JackpotService } from 'src/app/services/jackpot.service';


@Component({
  selector: 'app-margin-popup',
  templateUrl: './margin-popup.component.html',
  styleUrls: ['./margin-popup.component.css'],
})
export class MarginPopupComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  amount: number = 0;
  toastMessage: string = '';
  model: UpdateMarginRequest = { margin: this.amount, accountTypeId: 1, userId: parseInt(localStorage.getItem("userId") ?? "0") };

  constructor(
    public dialogRef: MatDialogRef<MarginPopupComponent>,
    private _snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: DropdownModel[],
    private jackpotService: JackpotService
  ) {}

  ngOnInit(): void {
    console.log(this.data);
    
  }

  addMargin() {
    this.jackpotService.updateMargin(this.model).subscribe({
      next: (response: AccountResponse) => {
        this.dialogRef.close();
        this.toastMessage = "Margin updated! ";
        this.openSnackBar();
      },
      error: (response: HttpErrorResponse) => {
        this.toastMessage = "Error updating margin";
        this.openSnackBar();
      }
    })
  }

  changeAccountType(accountTypeId: String) {
    this.model.accountTypeId = parseInt(accountTypeId.toString());

  }

  openSnackBar() {
    this._snackBar.open(this.toastMessage, 'Ok', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 3000
    });
  }
}
