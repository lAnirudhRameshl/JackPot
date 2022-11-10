import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { DropdownModel } from 'src/app/models/dropdown-model';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit, OnChanges {

  @Input()
  dropdownValues!: DropdownModel[];
  @Input()
  dropdownLabel: string = "";

  @Output()
  dropdownChangeEvent: EventEmitter<String> = new EventEmitter<String>();

  selected = "";

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['dropdownValues']) {
      this.dropdownValues = changes['dropdownValues'].currentValue;
      
      this.selected = this.dropdownValues[0].value.toString();
      
    }
  }

  ngOnInit(): void {
    this.selected = this.dropdownValues[0].value.toString();
  }

  dropdownChanged() {
    this.dropdownChangeEvent.emit(this.selected);
  }

  // callParent(){
  //   console.log("Dropdown.."+ this.selected);
  //   this.childAsset.emit(this.selected);
  // }

}
