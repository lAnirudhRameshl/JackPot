import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AccountResponse } from 'src/app/models/account-response';
import { AccountTypeResponse } from 'src/app/models/account-type-response';
import { DropdownModel } from 'src/app/models/dropdown-model';
import { User } from 'src/app/models/user.model';
import { JackpotService } from 'src/app/services/jackpot.service';
import { AddAccountPopupComponent } from '../add-account-popup/add-account-popup.component';

@Component({
  selector: 'app-profile-content',
  templateUrl: './profile-content.component.html',
  styleUrls: ['./profile-content.component.css']
})
export class ProfileContentComponent implements OnInit {

  userDetail!: User;

  accounts: AccountResponse[] = [];

  accountTypeDropdown: DropdownModel[] = [];

  dataSource: MatTableDataSource<AccountResponse> = new MatTableDataSource(this.accounts);

  displayedColumns = ["accountNumber", "accountType", "marginAvailable", "marginLeft"];

  constructor(private jackpotService: JackpotService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.userDetail = JSON.parse(localStorage.getItem("userDetails") ?? "{}");
    this.getAccountDetails();
    this.getAccountTypes();
  }

  getAccountDetails() {
    this.jackpotService.getAccountDetails(localStorage.getItem("userId") ?? "0").subscribe({
      next: (response: AccountResponse[]) => {
        this.accounts = response;
        this.dataSource = new MatTableDataSource(this.accounts);
      }
    });
  }

  getAccountTypes() {
    this.jackpotService.getAccountTypes().subscribe({
      next: (response: AccountTypeResponse[]) => {
        this.accountTypeDropdown = response.map(accountType => {
          return {
            option: accountType.accountType,
            value: accountType.accountTypeId
          }
        });
      }
    });
  }

  addAccount() {
    let dialogRef = this.dialog.open(AddAccountPopupComponent, {
      width: '33%',
      data: this.accountTypeDropdown
    });
    dialogRef.afterClosed().subscribe({
      next: (_) => {
        window.location.reload();
      }
    })
  }

}
