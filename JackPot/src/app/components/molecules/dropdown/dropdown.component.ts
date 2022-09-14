import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  asset_classes = [
    {value: 'all', viewValue: 'All stocks'},
    {value: 'main', viewValue: 'Main index'},
    {value: 'scap', viewValue: 'Small cap company'},
    {value: 'int', viewValue: 'International market'},
    {value: 'gov', viewValue: 'Government bonds'},
    {value: 'corp', viewValue: 'Corporate bonds'},
  ];

  selected="";
  constructor() { }

  ngOnInit(): void {
    
  }

}
