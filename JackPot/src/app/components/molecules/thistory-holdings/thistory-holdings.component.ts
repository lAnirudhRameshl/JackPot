import { Component, OnInit } from '@angular/core';
import { ITrade } from 'src/app/models/trade';
import { TradeDataService } from 'src/app/services/trade-data.service';

@Component({
  selector: 'app-thistory-holdings',
  templateUrl: './thistory-holdings.component.html',
  styleUrls: ['./thistory-holdings.component.css']
})
export class ThistoryHoldingsComponent implements OnInit {

  trades: ITrade[]=[];
  total: number =0;
  
  constructor(private tradeDataService : TradeDataService) { }

  ngOnInit(): void {
    this.getTotal();
  }

  getTotal(){
    this.tradeDataService.getTrades().subscribe((response)=>
    {
      this.total=response.length;
    })
  }

}
