import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AccountResponse } from 'src/app/models/account-response';
import { AccountTypeResponse } from 'src/app/models/account-type-response';
import { DropdownModel } from 'src/app/models/dropdown-model';
import { JackpotService } from 'src/app/services/jackpot.service';
import { MarginPopupComponent } from '../margin-popup/margin-popup.component';

@Component({
  selector: 'app-margin-summary',
  templateUrl: './margin-summary.component.html',
  styleUrls: ['./margin-summary.component.css']
})
export class MarginSummaryComponent implements OnInit {

  marginAvail:number = 3570;
  marginUtil:number = 420;

  accountTypeDropdown: DropdownModel[] = [];
  

  constructor(public dialog: MatDialog, private jackpotService: JackpotService) { }


  ngOnInit(): void {
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

  refreshMargin(){
    console.log('Refreshed Margin: '+ JSON.stringify( {"MAVAIL":this.marginAvail,"MUTIL":this.marginUtil}))
  }

  addMargin(){
    const dialogRef = this.dialog.open(MarginPopupComponent, {
      width: '33%',
      data: this.accountTypeDropdown
    });
  }

}
