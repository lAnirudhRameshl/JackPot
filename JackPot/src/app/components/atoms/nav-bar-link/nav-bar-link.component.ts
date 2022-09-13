import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar-link',
  templateUrl: './nav-bar-link.component.html',
  styleUrls: ['./nav-bar-link.component.css']
})
export class NavBarLinkComponent implements OnInit {

  @Input() link?:string;

  @Input() text?:string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
