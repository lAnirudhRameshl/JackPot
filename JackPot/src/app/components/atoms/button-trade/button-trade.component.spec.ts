import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonTradeComponent } from './button-trade.component';

describe('ButtonTradeComponent', () => {
  let component: ButtonTradeComponent;
  let fixture: ComponentFixture<ButtonTradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonTradeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonTradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
