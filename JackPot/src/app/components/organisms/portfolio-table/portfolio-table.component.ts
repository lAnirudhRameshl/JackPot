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

  filterValues = {
    accountType: '',
    assetClass: '',
    searchFilter: ''
  }

  constructor(private ds: JackpotService) {}

  search(e: any) {
    this.searchText = e;
    this.filterValues['searchFilter'] = e.trim().toLowerCase();
    this.applyFilter()
  }

  downloadPortfolio() {
    this.exporter.exportTable('csv',{fileName:'jackpot'});
  }

  ngOnInit(): void {
    let userId = localStorage.getItem('userId') ?? "0"
    this.ds.getPortfolioData(userId).subscribe((data) => {
      this.data = data;
      this.dataSource = new MatTableDataSource(this.data);
      this.holdingCount = this.data.length;
      this.dataSource.filterPredicate = this.customFilterPredicate;
      this.generatePortfolioSummary(this.data);
    });
  }

  generatePortfolioSummary(data: Portfolio[]) {
    this.currentVal = this.netpl = this.totalInvestment = 0;
    data.forEach((dt) => {
      this.currentVal += dt.currentValue;
      this.netpl += dt.profitLoss;
      this.totalInvestment += dt.quantity * dt.avgCost;
    });
  }

  isPositive(num: number): boolean {
    if (num > 0) {
      return true;
    } else return false;
  }

  assetClassChange(assetClass: string) {
    if (assetClass.trim().toLowerCase() != 'all stocks') {
      this.filterValues['assetClass'] = assetClass.trim().toUpperCase();
    } else {
      this.filterValues['assetClass'] = '';
    }
    this.applyFilter();
  }

  accountTypeChange(accountType: string) {
    if (accountType.trim().toLowerCase() != 'all accounts') {
      this.filterValues['accountType'] = accountType.trim().toUpperCase();
    } else {
      this.filterValues['accountType'] = '';
    }
    this.applyFilter();
  }

  applyFilter() {
    this.dataSource.filter = JSON.stringify(this.filterValues);
    this.holdingCount = this.dataSource.filteredData.length;
    this.generatePortfolioSummary(this.dataSource.filteredData);
  }

  customFilterPredicate(data: Portfolio, filter: string) {
    let filterJson: {accountType: string, assetClass: string, searchFilter: string} = JSON.parse(filter);

    if(filterJson['assetClass'] == '' && filterJson['accountType'] == '') return data.fundName.toLowerCase().indexOf(filterJson['searchFilter']) == 0;

    else if(filterJson['assetClass'] == '' && filterJson['accountType'] != '') return (data.accountType.accountTypeName.toUpperCase() == filterJson['accountType'] && data.fundName.toLowerCase().indexOf(filterJson['searchFilter']) == 0);

    else if(filterJson['assetClass'] != '' && filterJson['accountType'] == '') return (data.assetClass.assetClassName.toUpperCase() == filterJson['assetClass'] && data.fundName.toLowerCase().indexOf(filterJson['searchFilter']) == 0);

    else return (data.assetClass.assetClassName.toUpperCase() == filterJson['assetClass'] && data.accountType.accountTypeName.toUpperCase() == filterJson['accountType'] && data.fundName.toLowerCase().indexOf(filterJson['searchFilter']) == 0)
  }
}
