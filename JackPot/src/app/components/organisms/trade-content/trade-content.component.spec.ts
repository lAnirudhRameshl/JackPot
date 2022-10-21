import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeContentComponent } from './trade-content.component';

describe('TradeContentComponent', () => {
  let component: TradeContentComponent;
  let fixture: ComponentFixture<TradeContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradeContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TradeContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
