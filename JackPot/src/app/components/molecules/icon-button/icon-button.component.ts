import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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

  @Output()
  buttonActionEvent: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  buttonClickAction() {
    this.buttonActionEvent.emit();
  }

}
