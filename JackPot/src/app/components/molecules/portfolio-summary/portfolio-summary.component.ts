import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-portfolio-summary',
  templateUrl: './portfolio-summary.component.html',
  styleUrls: ['./portfolio-summary.component.css']
})
export class PortfolioSummaryComponent implements OnInit, OnChanges {

  @Input()
  totalInvestment: number = 0
  @Input()
  netPl: number = 0;
  @Input()
  currentVal: number = 0;

  totalInvestmentSplit: string[] = [];
  netPlSplit: string[] = [];
  currentValSplit: string[] = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.totalInvestmentSplit = this.totalInvestment.toFixed(2).toString().split('.');
    this.netPlSplit = this.netPl.toFixed(2).toString().split('.');
    this.currentValSplit = this.currentVal.toFixed(2).toString().split('.');
  }

  ngOnInit(): void {
    this.totalInvestmentSplit = this.totalInvestment.toFixed(2).toString().split('.');
    this.netPlSplit = this.netPl.toFixed(2).toString().split('.');
    this.currentValSplit = this.currentVal.toFixed(2).toString().split('.');
  }

}
