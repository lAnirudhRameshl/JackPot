import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatTableExporterDirective } from 'mat-table-exporter';
import { ITrade } from 'src/app/models/trade';
import { MatSort, Sort } from '@angular/material/sort';
import { JackpotService } from 'src/app/services/jackpot.service';

@Component({
  selector: 'app-thistory-table',
  templateUrl: './thistory-table.component.html',
  styleUrls: ['./thistory-table.component.css'],
})
export class ThistoryTableComponent implements OnInit {
  trades: ITrade[] = [];
  dataSource!: MatTableDataSource<ITrade>;
  searchText = '';
  holdingCount = 0;

  @ViewChild('exporter') exporter!: MatTableExporterDirective;
  @ViewChild('empTbSort') empTbSort = new MatSort();

  displayedColumns: string[] = [
    'fund',
    'quantity',
    'price',
    'account',
    'loss_profit',
    'date',
    'type',
  ];

  filterValues = {
    assetClass: '',
    accountType: '',
  };

  constructor(private jackpotService: JackpotService) {}

  ngOnInit(): void {
    this.getAllStocks();
  }

  getAllStocks() {
    this.jackpotService.getTrades().subscribe((data) => {
      this.trades = data;
      this.dataSource = new MatTableDataSource(this.trades);
      this.dataSource.sort = this.empTbSort;
      this.holdingCount = this.trades.length;
      this.dataSource.filterPredicate = this.customFilterPredicate;
    });
  }

  isPositive(num: number): boolean {
    if (num > 0) {
      return true;
    } else return false;
  }

  search(e: any) {
    console.log('Insie parent..fuction search called..');
    this.searchText = e;
    this.dataSource.filter = e.trim().toLowerCase();
    this.dataSource.sort = this.empTbSort;
  }

  downloadTradeHistory() {
    console.log('download from table');
    this.exporter.exportTable('csv', { fileName: 'jackpot' });
  }

  changeAssetType(assetType: string) {
    if (assetType.trim().toLowerCase() != 'all stocks') {
      this.filterValues['assetClass'] = assetType.trim().toUpperCase();
    } else {
      this.filterValues['assetClass'] = '';
    }
    this.applyFilter();
  }

  changeAccountType(accountType: string) {
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
  }

  customFilterPredicate(data: ITrade, filter: string) {
    let filterJson: {accountType: string, assetClass: string} = JSON.parse(filter);

    if(data.asset.includes(filterJson['assetClass']) && data.account.includes(filterJson['accountType'])) return true;

    return false
  }
}
