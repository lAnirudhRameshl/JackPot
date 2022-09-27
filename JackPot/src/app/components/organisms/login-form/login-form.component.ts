import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  loginForm!: FormGroup;
  showPassword: boolean = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email, Validators.pattern("^[a-z0-9]+@[a-z]+\.(com|in)$")]],
      password: [null, [Validators.required]]
    });
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword
  }

  getEmailErrorMessage() {
    let email = this.loginForm.get('email');
    let errorMessage = "";
    if(email?.hasError('required')) {
      errorMessage = "Please enter the mail"
    } else if(email?.hasError('email') || email?.hasError('pattern')) {
      errorMessage = "Please enter a valid email"
    }
    return errorMessage;
  }

  getPasswordErrorMessage() {
    return 'Please enter the password';
  }

}
