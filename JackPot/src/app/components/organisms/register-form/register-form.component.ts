import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher, MAT_DATE_FORMATS } from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { SignupRequest } from 'src/app/models/signup-request';
import { UserService } from 'src/app/services/user.service';

export const CUSTOM_FORMATS = {
  parse: {
    dateInput: 'yyyy-MM-DD',
  },
  display: {
    dateInput: 'yyyy-MM-DD',
  },
};

class CrossFieldErrorMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    return control!.touched! && form!.hasError('match');
  }
}

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
  providers: [{ provide: MAT_DATE_FORMATS, useValue: CUSTOM_FORMATS }],
})
export class RegisterFormComponent implements OnInit {
  registerForm!: FormGroup;
  showPassword: boolean = false;
  showConfirmPassword: boolean = false;
  errorStateMatcher = new CrossFieldErrorMatcher();

  confirmPasswordValidator: ValidatorFn = (control: AbstractControl) => {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    return password &&
      confirmPassword &&
      password.value != confirmPassword.value
      ? { match: true }
      : null;
  };

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router, private snackbar: MatSnackBar) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group(
      {
        firstName: [null, [Validators.required]],
        lastName: [null, [Validators.required]],
        email: [
          null,
          [
            Validators.required,
            Validators.email,
            Validators.pattern('^[a-z0-9]+@[a-z]+.(com|in)$'),
          ],
        ],
        password: [
          null,
          [
            Validators.required,
            Validators.minLength(6),
            Validators.pattern(
              '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{6,}$'
            ),
          ],
        ],
        confirmPassword: [null, [Validators.required]],
        dateOfBirth: [null, [Validators.required]],
        phoneNumber: [
          null,
          [
            Validators.required,
            Validators.minLength(10),
            Validators.maxLength(10),
          ],
        ],
        investmentRisk: [1, Validators.required],
      },
      {
        validator: this.confirmPasswordValidator,
      }
    );
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

  toggleShowConfirmPassword() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  riskType() {
    let risk = this.registerForm.get('investmentRisk')?.value;
    let labelText = '';
    if (risk == 1) {
      labelText = 'Low risk';
    } else if (risk == 2) {
      labelText = 'Moderate risk';
    } else if (risk == 3) {
      labelText = 'Medium risk';
    } else if (risk == 4) {
      labelText = 'High risk';
    } else {
      labelText = 'Very high risk';
    }
    return labelText;
  }

  getFirstNameErrorMessage(): string {
    return 'Please enter your first name';
  }

  getLastNameErrorMessage(): string {
    return 'Please enter your last name';
  }

  getEmailErrorMessage(): string {
    let email = this.registerForm.get('email');
    let errorMessage = '';
    if (email?.hasError('required')) {
      errorMessage = 'Please enter the email';
    } else if (email?.hasError('email') || email?.hasError('pattern')) {
      errorMessage = 'Please enter a valid email';
    }
    return errorMessage;
  }

  getPasswordErrorMessage(): string {
    let password = this.registerForm.get('password');
    let errorMessage = '';
    if (password?.hasError('required')) {
      errorMessage = 'Please enter the password';
    } else if (password?.hasError('minlength')) {
      errorMessage = 'The password must be at least 6 characters long';
    } else if (password?.hasError('pattern')) {
      errorMessage =
        'Password must have at least 1 number, lower and uppercase alphabet and special character';
    }
    return errorMessage;
  }

  getConfirmPasswordErrorMessage(): string {
    let confirmPassword = this.registerForm.get('confirmPassword');
    let errorMessage = '';
    if (confirmPassword?.hasError('required')) {
      errorMessage = 'Please re-enter the password to confirm';
    } else if (this.registerForm.hasError('match')) {
      errorMessage = 'Password and confirm password do not match';
    }
    return errorMessage;
  }

  getDateOfBirthErrorMessage(): string {
    let dateOfBirth = this.registerForm.get('dateOfBirth');
    let errorMessage = '';
    if (dateOfBirth?.hasError('required')) {
      errorMessage = 'Please enter the date of birth';
    }
    return errorMessage;
  }

  getPhoneNumberErrorMessage(): string {
    let phoneNumber = this.registerForm.get('phoneNumber');
    let errorMessage = '';
    if (phoneNumber?.hasError('required')) {
      errorMessage = 'Please enter the phone number';
    } else if (
      phoneNumber?.hasError('minlength') ||
      phoneNumber?.hasError('maxlength')
    ) {
      errorMessage = 'Invalid number';
    }
    return errorMessage;
  }

  register() {
    if(this.registerForm.valid){
      let signupRequest: SignupRequest = {
        firstName: this.registerForm.get('firstName')?.value,
        lastName: this.registerForm.get('lastName')?.value,
        email: this.registerForm.get('email')?.value,
        password: this.registerForm.get('password')?.value,
        phoneNumber: this.registerForm.get('phoneNumber')?.value,
        investmentRisk: this.registerForm.get('investmentRisk')?.value,
      }
      this.userService.register(signupRequest).subscribe({
        next: (response) => {
          this.snackbar.open("Account created successfully", "OK", {duration: 3000});
          this.router.navigateByUrl('/login');
        },
        error: (errorResponse) => {
          
        }
      })
    }
  }
}
