import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-profile-edit-content',
  templateUrl: './profile-edit-content.component.html',
  styleUrls: ['./profile-edit-content.component.css']
})
export class ProfileEditContentComponent implements OnInit {

  profileEditForm!: FormGroup;
  userData!: User;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.userData = {
      firstName: 'Anirudh',
      lastName: 'Ramesh',
      email: 'anirudhramesh0@gmail.com',
      dateOfBirth: new Date(2000, 10, 14),
      phoneNumber: '9443390416',
      investmentRisk: 5
    }

    this.profileEditForm = this.formBuilder.group({
      firstName: [this.userData.firstName, [Validators.required]],
      lastName: [this.userData.lastName, [Validators.required]],
      email: [this.userData.email, [Validators.required]],
      dateOfBirth: [formatDate(this.userData.dateOfBirth, 'yyyy-MM-dd', 'en'), [Validators.required]],
      phoneNumber: [this.userData.phoneNumber, [Validators.required]],
      investmentRisk: [this.userData.investmentRisk, [Validators.required, Validators.min(1), Validators.max(5)]]
    })
  }

  get investmentRisk() {
    return this.profileEditForm.get('investmentRisk')?.value;
  }

  set investmentRisk(investmentRisk: number) {
    this.profileEditForm.get('investmentRisk')?.setValue(investmentRisk)
  }

  editProfile() {

  }

  riskText() {
    let labelText = '';
    if(this.investmentRisk == 1) {
      labelText = 'Low risk';
    } else if(this.investmentRisk == 2) {
      labelText = 'Moderate risk';
    } else if(this.investmentRisk == 3) {
      labelText = 'Medium risk';
    } else if(this.investmentRisk == 4) {
      labelText = 'High risk';
    } else {
      labelText = 'Very high risk';
    }
    return labelText;
  }

}
