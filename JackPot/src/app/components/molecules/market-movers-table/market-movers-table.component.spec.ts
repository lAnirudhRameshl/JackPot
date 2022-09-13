import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketMoversTableComponent } from './market-movers-table.component';

describe('MarketMoversTableComponent', () => {
  let component: MarketMoversTableComponent;
  let fixture: ComponentFixture<MarketMoversTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketMoversTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarketMoversTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
