import { Component, OnInit } from '@angular/core';
import { ITrade } from 'src/app/models/trade';
import { TradeDataService } from 'src/app/services/trade-data.service';

@Component({
  selector: 'app-thistory-table',
  templateUrl: './thistory-table.component.html',
  styleUrls: ['./thistory-table.component.css']
})
export class ThistoryTableComponent implements OnInit {

  trades: ITrade[]=[];
  
  constructor(private tradeDataService: TradeDataService) { }
   
  ngOnInit(): void {
    this.getAllStocks();
  }

  getAllStocks()
  {
  this.tradeDataService.getTrades().subscribe((response)=>
    {
      this.trades=response;
    })
   }

}
