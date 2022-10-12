import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormControl } from '@angular/forms';

import { LoginFormComponent } from './login-form.component';

describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginFormComponent],
      providers: [FormBuilder],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('toggleShowPassword function', () => {
    it('should toggle showPassword variable', () => {
      let password = component.showPassword;

      component.toggleShowPassword();

      expect(password).not.toEqual(component.showPassword);
    });
  });

  describe('getEmailErrorMessage function', () => {
    it('should return "Please enter the mail" when control has email error', () => {
      component.loginForm.get('email')?.setErrors({ required: true });

      let emailError = component.getEmailErrorMessage();

      expect(emailError).toEqual('Please enter the mail');
    });

    it('should return "Please enter a valid email" when basic email match is not satisfied', () => {
      component.loginForm.get('email')?.setErrors({ email: true });

      let emailError = component.getEmailErrorMessage();

      expect(emailError).toEqual('Please enter a valid email');
    });

    it('should return "Please enter a valid email" when basic email pattern match is not satisfied', () => {
      component.loginForm.get('email')?.setErrors({ pattern: true });

      let emailError = component.getEmailErrorMessage();

      expect(emailError).toEqual('Please enter a valid email');
    });
  });

  describe('getPasswordErrorMessage function', () => {
    it('should return "Please enter the password"', () => {
      let passwordError = component.getPasswordErrorMessage();

      expect(passwordError).toEqual("Please enter the password");
    })
  })
});
