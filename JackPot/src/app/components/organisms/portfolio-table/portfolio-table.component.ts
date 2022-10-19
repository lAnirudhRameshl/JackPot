import { Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatTableExporterDirective } from 'mat-table-exporter';
import { Portfolio } from 'src/app/models/portfolio.model';
import { JackpotService } from 'src/app/services/jackpot.service';

@Component({
  selector: 'app-portfolio-table',
  templateUrl: './portfolio-table.component.html',
  styleUrls: ['./portfolio-table.component.css'],
})
export class PortfolioTableComponent implements OnInit {
  data!: Portfolio[];
  searchText = '';
  dataSource!: MatTableDataSource<Portfolio>;

  totalInvestment: number = 0;
  netpl: number = 0;
  currentVal: number = 0;
  holdingCount = 0;

  @ViewChild("exporter") exporter! : MatTableExporterDirective;

  displayedColumns: string[] = [
    'fund',
    'units',
    'avgcost',
    'ltp',
    'currentval',
    'netchg',
    'daychg',
    'pandl',
    'btn',
  ];
  constructor(private ds: JackpotService) {}

  search(e: any) {
    this.searchText = e;
    this.dataSource.filter = e.trim().toLowerCase();
  }

  downloadPortfolio() {
    this.exporter.exportTable('csv',{fileName:'jackpot'});
  }

  ngOnInit(): void {
    this.ds.getPortfolioData().subscribe((data) => {
      this.data = data;
      this.dataSource = new MatTableDataSource(this.data);
      this.holdingCount = this.data.length;
      this.generatePortfolioSummary(this.data);
    });
  }

  generatePortfolioSummary(data: Portfolio[]) {
    this.currentVal = this.netpl = this.totalInvestment = 0;
    data.forEach((dt) => {
      this.currentVal += dt.currentval;
      this.netpl += dt.pandl;
      this.totalInvestment += dt.units * dt.avgcost;
    });
  }

  isPositive(num: number): boolean {
    if (num > 0) {
      return true;
    } else return false;
  }

  assetClassChange(assetClass: string) {
    if(assetClass.trim().toLowerCase() != 'all stocks') {
      this.dataSource.filter = assetClass.trim().toUpperCase();
      this.generatePortfolioSummary(this.dataSource.filteredData);
    } else {
      this.dataSource.filter = '';
      this.generatePortfolioSummary(this.dataSource.filteredData);
    }
    this.holdingCount = this.dataSource.filteredData.length;
  }
}
