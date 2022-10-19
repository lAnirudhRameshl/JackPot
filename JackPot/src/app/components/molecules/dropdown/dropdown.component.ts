import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  @Input()
  dropdownValues!: string[];
  @Input()
  dropdownLabel: string = "";

  @Output()
  dropdownChangeEvent: EventEmitter<String> = new EventEmitter<String>();

  selected="";

  constructor() { }

  ngOnInit(): void {
    this.selected = this.dropdownValues[0];
  }

  dropdownChanged() {
    this.dropdownChangeEvent.emit(this.selected);
  }

}
