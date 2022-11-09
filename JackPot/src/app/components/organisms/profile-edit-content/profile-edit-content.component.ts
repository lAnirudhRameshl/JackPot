import { formatDate } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginResponse } from 'src/app/models/login-response';
import { UpdateUserRequest } from 'src/app/models/update-user-request';
import { User } from 'src/app/models/user.model';
import { JackpotService } from 'src/app/services/jackpot.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile-edit-content',
  templateUrl: './profile-edit-content.component.html',
  styleUrls: ['./profile-edit-content.component.css'],
})
export class ProfileEditContentComponent implements OnInit {
  profileEditForm!: FormGroup;
  userData!: User;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.userData = JSON.parse(localStorage.getItem('userDetails') ?? '{}');

    this.profileEditForm = this.formBuilder.group({
      firstName: [this.userData.firstName, [Validators.required]],
      lastName: [this.userData.lastName, [Validators.required]],
      email: [this.userData.email, [Validators.required]],
      phoneNumber: [this.userData.phoneNumber, [Validators.required]],
      investmentRisk: [
        this.userData.investmentRisk,
        [Validators.required, Validators.min(1), Validators.max(5)],
      ],
    });

    this.profileEditForm.get('email')?.disable();
  }

  get investmentRisk() {
    return this.profileEditForm.get('investmentRisk')?.value;
  }

  editProfile() {
    let request: UpdateUserRequest = {
      firstName: this.profileEditForm.get('firstName')?.value,
      lastName: this.profileEditForm.get('lastName')?.value,
      phoneNumber: this.profileEditForm.get('phoneNumber')?.value,
      investmentRisk: this.profileEditForm.get('investmentRisk')?.value,
    };

    this.userService.updateUser(request).subscribe({
      next: (response: LoginResponse) => {
        localStorage.setItem('userDetails', JSON.stringify(response));
        this.router.navigateByUrl('/profile');
      },
      error: (errorResponse: HttpErrorResponse) => {
        this.snackbar.open("There was an error editing the profile", "OK", {duration: 3000, verticalPosition: 'bottom', horizontalPosition: 'center'})
      }
    });
  }

  riskText() {
    let labelText = '';
    if (this.investmentRisk == 1) {
      labelText = 'Low risk';
    } else if (this.investmentRisk == 2) {
      labelText = 'Moderate risk';
    } else if (this.investmentRisk == 3) {
      labelText = 'Medium risk';
    } else if (this.investmentRisk == 4) {
      labelText = 'High risk';
    } else {
      labelText = 'Very high risk';
    }
    return labelText;
  }
}
