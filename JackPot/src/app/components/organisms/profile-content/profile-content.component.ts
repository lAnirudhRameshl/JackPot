import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-profile-content',
  templateUrl: './profile-content.component.html',
  styleUrls: ['./profile-content.component.css']
})
export class ProfileContentComponent implements OnInit {

  userDetail!: User;

  constructor() { }

  ngOnInit(): void {
    this.userDetail = {
      firstName: 'Anirudh',
      lastName: 'Ramesh',
      email: 'anirudhramesh0@gmail.com',
      dateOfBirth: new Date(2000, 10, 14),
      phoneNumber: '9443390416',
      investmentRisk: 5
    }
  }

}
