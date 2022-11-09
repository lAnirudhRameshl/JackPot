import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'node_modules/chart.js';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

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
      label: 'Asset Distribution',
      data: [120 ,180, 300,200, 80],
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

  ngOnInit(): void {
    Chart.register(...registerables);
    var myChart = new Chart("myChart",{
      type: 'doughnut',
      data: this.data,
    })
    var myChart2 = new Chart("myChart2",{
      type: 'doughnut',
      data: this.data2,
    })
  }

}
