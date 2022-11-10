import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Chart, registerables } from 'node_modules/chart.js';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit,OnChanges {
  @Input()
  assetData!: number[];

  @Input()
  accountData!:number[];

  myChart2 !: Chart;

   data = {
    labels: [
      'MIS',
      'SCC',
      'IMS',
      'GB',
      'CB'
    ],
    datasets: [{
      label: 'Asset Distribution',
      data: [300,220, 50,79, 100],
      backgroundColor: [
        '#704DC4',
        '#4B852C',
        'rgb(255, 205, 86)',
        // '#B67A3D',
        // '#5B6Fc8',
        // '#25706F'
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        

      ],
      hoverOffset: 4
    }]
  };

  data2 = {
    labels: [
      'Brokerage',
      '401K',
      'IRA',
      'Roth IRA',
      'HSA'
    ],
    datasets: [{
      label: 'Account Distribution',
      data: this.accountData,
      backgroundColor: [
        // '#704DC4',
        '#4B852C',
        '#B67A3D',
        'rgb(255, 205, 86)',
        
        '#5B6Fc8',
        '#25706F',
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        

      ],
      hoverOffset: 4
    }]
  };

  


  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if(changes["accountData"]){
      console.log(`####s from chart from onCHanges: ${this.accountData}`);
      this.accountData = changes["accountData"].currentValue;
      this.data2.datasets[0].data = this.accountData;
      // this.myChart2.data = this.data2;
      this.myChart2.destroy();
      this.myChart2 = new Chart("myChart2",{
        type: 'doughnut',
        data: this.data2,
      })
    }
    
  }

  ngOnInit(): void {
    console.log(`####s from chart: ${this.accountData}`);
    Chart.register(...registerables);
    var myChart = new Chart("myChart",{
      type: 'doughnut',
      data: this.data,
    })

    this.myChart2 = new Chart("myChart2",{
      type: 'doughnut',
      data: this.data2,
    })

    
    
  }

}
