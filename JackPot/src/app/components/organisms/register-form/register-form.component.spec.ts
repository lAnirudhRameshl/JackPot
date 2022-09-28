import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';

import { RegisterFormComponent } from './register-form.component';

describe('RegisterFormComponent', () => {
  let component: RegisterFormComponent;
  let fixture: ComponentFixture<RegisterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterFormComponent],
      providers: [FormBuilder],
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('toggleShowPassword function', () => {
    it('should toggle showPassword', () => {
      let showPassword = component.showPassword;

      component.toggleShowPassword();

      expect(showPassword).not.toEqual(component.showPassword);
    });
  });

  describe('toggleShowConfirmPassword function', () => {
    it('should toggle showConfirmPassword', () => {
      let showConfirmPassword = component.showConfirmPassword;

      component.toggleShowConfirmPassword();

      expect(showConfirmPassword).not.toEqual(component.showConfirmPassword);
    });
  });

  describe('riskType function', () => {
    it('should return "Low risk" when investmentRisk is 1', () => {
      component.registerForm.get('investmentRisk')?.setValue(1);

      let riskType = component.riskType();

      expect(riskType).toEqual('Low risk');
    });

    it('should return "Moderate risk" when investmentRisk is 2', () => {
      component.registerForm.get('investmentRisk')?.setValue(2);

      let riskType = component.riskType();

      expect(riskType).toEqual('Moderate risk');
    });

    it('should return "Medium risk" when investmentRisk is 3', () => {
      component.registerForm.get('investmentRisk')?.setValue(3);

      let riskType = component.riskType();

      expect(riskType).toEqual('Medium risk');
    });

    it('should return "High risk" when investmentRisk is 4', () => {
      component.registerForm.get('investmentRisk')?.setValue(4);

      let riskType = component.riskType();

      expect(riskType).toEqual('High risk');
    });

    it('should return "Very high risk" when investmentRisk is 5', () => {
      component.registerForm.get('investmentRisk')?.setValue(5);

      let riskType = component.riskType();

      expect(riskType).toEqual('Very high risk');
    });
  });

  describe('getFirstNameErrorMessage', () => {
    it('should return "Please enter your first name"', () => {
      expect(component.getFirstNameErrorMessage()).toEqual(
        'Please enter your first name'
      );
    });
  });

  describe('getLastNameErrorMessage', () => {
    it('should return "Please enter your last name"', () => {
      expect(component.getLastNameErrorMessage()).toEqual(
        'Please enter your last name'
      );
    });
  });

  describe('getEmailErrorMessage function', () => {
    it('should return "Please enter the email" when control has email error', () => {
      component.registerForm.get('email')?.setErrors({ required: true });

      let emailError = component.getEmailErrorMessage();

      expect(emailError).toEqual('Please enter the email');
    });

    it('should return "Please enter a valid email" when basic email match is not satisfied', () => {
      component.registerForm.get('email')?.setErrors({ email: true });

      let emailError = component.getEmailErrorMessage();

      expect(emailError).toEqual('Please enter a valid email');
    });

    it('should return "Please enter a valid email" when basic email pattern match is not satisfied', () => {
      component.registerForm.get('email')?.setErrors({ pattern: true });

      let emailError = component.getEmailErrorMessage();

      expect(emailError).toEqual('Please enter a valid email');
    });
  });

  describe('getPasswordErrorMessage function', () => {
    it('should return "Please enter the password" when control has required error', () => {
      component.registerForm.get('password')?.setErrors({ required: true });

      let passwordError = component.getPasswordErrorMessage();

      expect(passwordError).toEqual('Please enter the password');
    });

    it('should return "The password must be at least 6 characters long" when control has minlength error', () => {
      component.registerForm.get('password')?.setErrors({ minlength: true });

      let passwordError = component.getPasswordErrorMessage();

      expect(passwordError).toEqual(
        'The password must be at least 6 characters long'
      );
    });

    it('should return "Password must have at least 1 number, lower and uppercase alphabet and special character" when control has pattern error', () => {
      component.registerForm.get('password')?.setErrors({ pattern: true });

      let passwordError = component.getPasswordErrorMessage();

      expect(passwordError).toEqual(
        'Password must have at least 1 number, lower and uppercase alphabet and special character'
      );
    });
  });

  describe('getConfirmPasswordErrorMessage function', () => {
    it('should return "Please re-enter the password to confirm" when control has required error', () => {
      component.registerForm
        .get('confirmPassword')
        ?.setErrors({ required: true });

      let confirmError = component.getConfirmPasswordErrorMessage();

      expect(confirmError).toEqual('Please re-enter the password to confirm');
    });

    it('should return "Password and confirm password do not match" when form has match error', () => {
      component.registerForm
        .get('confirmPassword')
        ?.setErrors({ required: false });
      component.registerForm.setErrors({ match: true });

      let confirmError = component.getConfirmPasswordErrorMessage();

      expect(confirmError).toEqual(
        'Password and confirm password do not match'
      );
    });
  });

  describe('getDateOfBirthErrorMessage', () => {
    it('should return "Please enter the date of birth" when control has required error', () => {
      component.registerForm.get('dateOfBirth')?.setErrors({ required: true });

      expect(component.getDateOfBirthErrorMessage()).toEqual(
        'Please enter the date of birth'
      );
    });
  });

  describe('getPhoneNumberErrorMessage', () => {
    it('should return "Please enter the phone number" when control has required error', () => {
      component.registerForm.get('phoneNumber')?.setErrors({ required: true });

      expect(component.getPhoneNumberErrorMessage()).toEqual(
        'Please enter the phone number'
      );
    });

    it('should return "Invalid number" when control has minlength error', () => {
      component.registerForm.get('phoneNumber')?.setErrors({ minlength: true });

      expect(component.getPhoneNumberErrorMessage()).toEqual('Invalid number');
    });

    it('should return "Invalid number" when control has maxlength error', () => {
      component.registerForm.get('phoneNumber')?.setErrors({ maxlength: true });

      expect(component.getPhoneNumberErrorMessage()).toEqual('Invalid number');
    });
  });


});
