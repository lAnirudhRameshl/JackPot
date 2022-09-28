import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';

import { ProfileEditContentComponent } from './profile-edit-content.component';

describe('ProfileEditContentComponent', () => {
  let component: ProfileEditContentComponent;
  let fixture: ComponentFixture<ProfileEditContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileEditContentComponent],
      providers: [FormBuilder],
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileEditContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set userData', () => {
    expect(component.userData).not.toBeNull();
  });

  describe('riskText function', () => {
    it('should return "Low risk" when investmentRisk is 1', () => {
      component.profileEditForm.get('investmentRisk')?.setValue(1);

      let riskText = component.riskText();

      expect(riskText).toEqual('Low risk');
    });

    it('should return "Moderate risk" when investmentRisk is 2', () => {
      component.profileEditForm.get('investmentRisk')?.setValue(2);

      let riskText = component.riskText();

      expect(riskText).toEqual('Moderate risk');
    });

    it('should return "Medium risk" when investmentRisk is 3', () => {
      component.profileEditForm.get('investmentRisk')?.setValue(3);

      let riskText = component.riskText();

      expect(riskText).toEqual('Medium risk');
    });

    it('should return "High risk" when investmentRisk is 4', () => {
      component.profileEditForm.get('investmentRisk')?.setValue(4);

      let riskText = component.riskText();

      expect(riskText).toEqual('High risk');
    });

    it('should return "Very high risk" when investmentRisk is 5', () => {
      component.profileEditForm.get('investmentRisk')?.setValue(5);

      let riskText = component.riskText();

      expect(riskText).toEqual('Very high risk');
    });
  });
});
