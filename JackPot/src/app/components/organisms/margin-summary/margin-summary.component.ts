import { AccountType } from './../trade-popup/trade-popup.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { JackpotService } from 'src/app/services/jackpot.service';
import { MarginPopupComponent } from '../margin-popup/margin-popup.component';

@Component({
  selector: 'app-margin-summary',
  templateUrl: './margin-summary.component.html',
  styleUrls: ['./margin-summary.component.css']
})
export class MarginSummaryComponent implements OnInit {

  marginAvail:number = 0;
  marginUtil:number = 0;
  

  constructor(public dialog: MatDialog,private jackpotService: JackpotService) { }


  ngOnInit(): void {
    this.refreshMargin();
  }

  refreshMargin(){
    
    this.jackpotService.getUserAccountByUserId(localStorage.getItem('userId')?? "1").subscribe((data) => {
      
      let t_margin_avl = 0 , t_margin_used = 0
      
      console.table(data);
      console.table(data[0].accountType);

      data.forEach( (ua) => {
        t_margin_avl += ua.marginAvailable
        t_margin_used += ua.marginUsed
      })
      
      this.marginAvail = t_margin_avl;
      this.marginUtil = t_margin_used;
      
    });
    
    console.table('Refreshed Margin: '+ JSON.stringify( {"MAVAIL":this.marginAvail,"MUTIL":this.marginUtil}))

  }

  addMargin(){
    const dialogRef = this.dialog.open(MarginPopupComponent, {
      width: '33%',
      
    });
  }

}
