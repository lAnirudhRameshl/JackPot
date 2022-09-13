import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarLinkComponent } from './nav-bar-link.component';

describe('NavBarLinkComponent', () => {
  let component: NavBarLinkComponent;
  let fixture: ComponentFixture<NavBarLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarLinkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavBarLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
