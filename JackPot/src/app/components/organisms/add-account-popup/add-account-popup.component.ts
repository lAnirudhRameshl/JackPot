import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { AccountResponse } from 'src/app/models/account-response';
import { AddAccountRequest } from 'src/app/models/add-account-request';
import { DropdownModel } from 'src/app/models/dropdown-model';
import { JackpotService } from 'src/app/services/jackpot.service';

@Component({
  selector: 'app-add-account-popup',
  templateUrl: './add-account-popup.component.html',
  styleUrls: ['./add-account-popup.component.css'],
})
export class AddAccountPopupComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  accountNumber: string = '';
  accountTypeId: number = 1;
  marginAvailable: number = 0;
  toastMessage: string = '';

  model: AddAccountRequest = {
    accountTypeId: this.accountTypeId,
    accountNumber: this.accountNumber,
    marginAvailable: this.marginAvailable,
    marginUsed: 0,
    userId: parseInt(localStorage.getItem('userId') ?? '0'),
  };

  constructor(
    private jackpotService: JackpotService,
    public dialogRef: MatDialogRef<AddAccountPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DropdownModel[],
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  changeAccountType(accountTypeId: String) {
    this.model.accountTypeId = parseInt(accountTypeId.toString());
  }

  addAccount() {
    this.jackpotService.addAccount(this.model).subscribe({
      next: (response: AccountResponse) => {
        this._snackBar.open('Account added successfully', 'OK', {
          duration: 3000,
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        });
        this.dialogRef.close();
      },
      error: (response: HttpErrorResponse) => {
        this._snackBar.open('Error adding account', 'OK', {
          duration: 5000,
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        });
      },
    });
  }
}
