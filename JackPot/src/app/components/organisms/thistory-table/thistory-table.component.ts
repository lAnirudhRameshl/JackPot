import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatTableExporterDirective } from 'mat-table-exporter';
import { ITrade } from 'src/app/models/trade';
import { ExportService } from 'src/app/services/export.service';
import { TradeDataService } from 'src/app/services/trade-data.service';
import {MatSort, Sort} from '@angular/material/sort';

@Component({
  selector: 'app-thistory-table',
  templateUrl: './thistory-table.component.html',
  styleUrls: ['./thistory-table.component.css']
})
export class ThistoryTableComponent implements OnInit {

  trades: ITrade[]=[];
  dataSource!: MatTableDataSource<ITrade>;
  searchText="";

  @ViewChild("exporter") exporter! : MatTableExporterDirective;
  @ViewChild('empTbSort') empTbSort = new MatSort();
  
  displayedColumns: string[] = ['fund','units','price','account', 'loss_profit','date', 'type'];
  
  constructor(private tradeDataService: TradeDataService,private exportService: ExportService) {

   }
   
  ngOnInit(): void {
    this.getAllStocks();
    
  }

  getAllStocks()
  {
  this.tradeDataService.getTrades().subscribe((data)=>
    {
      this.trades=data;
      this.dataSource = new MatTableDataSource(this.trades);
      this.dataSource.sort = this.empTbSort;
    })
    
   }

   isPositive(num:number):boolean{
    if(num>0){return true;}
    else
      return false;
  }

  search(e:any){
    console.log("Insie parent..fuction search called..");
    this.searchText = e;
    this.dataSource.filter = e.trim().toLowerCase();
    this.dataSource.sort = this.empTbSort;

  }

  myDownload(e:any){
    console.log("download from table");
    this.exporter.exportTable('csv',{fileName:'jackpot'})
  }

}
