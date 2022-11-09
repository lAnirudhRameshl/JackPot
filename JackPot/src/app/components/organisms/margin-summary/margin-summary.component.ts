import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MarginPopupComponent } from '../margin-popup/margin-popup.component';

@Component({
  selector: 'app-margin-summary',
  templateUrl: './margin-summary.component.html',
  styleUrls: ['./margin-summary.component.css']
})
export class MarginSummaryComponent implements OnInit {

  marginAvail:number = 3570;
  marginUtil:number = 420;
  

  constructor(public dialog: MatDialog) { }


  ngOnInit(): void {
  }

  refreshMargin(){
    console.log('Refreshed Margin: '+ JSON.stringify( {"MAVAIL":this.marginAvail,"MUTIL":this.marginUtil}))
  }

  addMargin(){
    const dialogRef = this.dialog.open(MarginPopupComponent, {
      width: '33%',
      
    });
  }

}
