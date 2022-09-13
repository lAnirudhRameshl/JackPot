import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.css']
})
export class ProfileDetailComponent implements OnInit {
  @Input()
  detailName: string = "";
  @Input()
  detailValue: string = "";


  constructor() { }

  ngOnInit(): void {
  }

}
