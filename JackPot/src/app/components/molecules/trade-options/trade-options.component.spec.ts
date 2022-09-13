import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeOptionsComponent } from './trade-options.component';

describe('TradeOptionsComponent', () => {
  let component: TradeOptionsComponent;
  let fixture: ComponentFixture<TradeOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradeOptionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TradeOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
