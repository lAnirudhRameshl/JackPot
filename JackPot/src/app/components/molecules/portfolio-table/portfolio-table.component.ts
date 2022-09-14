import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
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
  searchText="";
  dataSource!: MatTableDataSource<Portfolio>;

  totalInvestment:number=0;
  netpl:number = 0;
  currentVal: number=0;

  arr:any[]=[];
  arr1:any[]=[];
  arr2:any[]=[];
  
  displayedColumns: string[] = ['fund','units','avgcost','ltp','currentval','netchg','daychg','pandl','btn'];
  constructor(private ds:PortfolioDataService) { }

  search(e:any){
    console.log("Insie parent..fuction search called..");
    this.searchText = e;
    this.dataSource.filter = e.trim().toLowerCase();
  }

  ngOnInit(): void {
    this.ds.getPortfolioData().subscribe((data)=>{
      this.data=data;
      this.dataSource = new MatTableDataSource(this.data);
      this.data.forEach((dt)=>{
        console.log('DATAA:'+ dt.currentval);
        this.currentVal += dt.currentval;
        this.netpl += dt.pandl;
        this.totalInvestment += (dt.units * dt.avgcost);

        })
        cal();
    })
    const cal = () =>{
      this.arr = this.netpl.toString().split('.');
      this.arr1 = this.currentVal.toString().split('.');
      this.arr2 = this.totalInvestment.toString().split('.');
    }
    
  
  }

  isPositive(num:number):boolean{
    if(num>0){return true;}
    else
      return false;
  }
}
