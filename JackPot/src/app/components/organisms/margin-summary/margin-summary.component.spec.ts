import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarginSummaryComponent } from './margin-summary.component';

describe('MarginSummaryComponent', () => {
  let component: MarginSummaryComponent;
  let fixture: ComponentFixture<MarginSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarginSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarginSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
