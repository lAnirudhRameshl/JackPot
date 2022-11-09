import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarginPopupComponent } from './margin-popup.component';

describe('MarginPopupComponent', () => {
  let component: MarginPopupComponent;
  let fixture: ComponentFixture<MarginPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarginPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarginPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
