import { Component, OnInit } from '@angular/core';
import { concatMap, delay, Observable, of, repeat } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  imageSrc="";
  constructor() { }

  ngOnInit(): void {
     of('/assets/images/history.png','/assets/images/trade.png','/assets/images/portfolio.png').pipe(concatMap(url => of(url).pipe(delay(3000))),repeat()).forEach(x=>this.imageSrc=x);
  }

}
