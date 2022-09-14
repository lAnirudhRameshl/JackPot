import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Portfolio } from 'src/app/models/portfolio.model';
import { PortfolioDataService } from 'src/app/services/portfolio-data.service';

@Component({
  selector: 'app-portfolio-table',
  templateUrl: './portfolio-table.component.html',
  styleUrls: ['./portfolio-table.component.css']
})
export class PortfolioTableComponent implements OnInit {
  
  data: Portfolio[]=[];
  dataSource!: MatTableDataSource<Portfolio>;
  
  displayedColumns: string[] = ['fund','units','avgcost','ltp','currentval','netchg','daychg','pandl'];
  constructor(private ds:PortfolioDataService) { }

  ngOnInit(): void {
    this.ds.getPortfolioData().subscribe((data)=>{
      this.data=data;
      this.dataSource = new MatTableDataSource(this.data);
    })
    
  }

  isPositive(num:number):boolean{
    if(num>0){return true;}
    else
      return false;
  }

}
