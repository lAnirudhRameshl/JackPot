import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-summary',
  templateUrl: './portfolio-summary.component.html',
  styleUrls: ['./portfolio-summary.component.css']
})
export class PortfolioSummaryComponent implements OnInit {

  @Input()
  totalInvestment!: number
  @Input()
  netPl!: number;
  @Input()
  currentVal!: number;

  totalInvestmentSplit: string[] = [];
  netPlSplit: string[] = [];
  currentValSplit: string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.totalInvestmentSplit = this.totalInvestment.toString().split('.');
    this.netPlSplit = this.netPl.toString().split('.');
    this.currentValSplit = this.currentVal.toString().split('.');
  }

}
