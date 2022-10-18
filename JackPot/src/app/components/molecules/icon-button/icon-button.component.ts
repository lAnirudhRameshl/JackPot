import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.css']
})
export class IconButtonComponent implements OnInit {

  @Input()
  buttonText: string = "";
  @Input()
  iconName: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
