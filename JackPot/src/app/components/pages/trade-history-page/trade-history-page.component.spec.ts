import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeHistoryPageComponent } from './trade-history-page.component';

describe('TradeHistoryPageComponent', () => {
  let component: TradeHistoryPageComponent;
  let fixture: ComponentFixture<TradeHistoryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradeHistoryPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TradeHistoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
