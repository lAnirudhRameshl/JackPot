import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileEditContentComponent } from './profile-edit-content.component';

describe('ProfileEditContentComponent', () => {
  let component: ProfileEditContentComponent;
  let fixture: ComponentFixture<ProfileEditContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileEditContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileEditContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
