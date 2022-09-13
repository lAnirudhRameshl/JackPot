import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuySellPanelComponent } from './buy-sell-panel.component';

describe('BuySellPanelComponent', () => {
  let component: BuySellPanelComponent;
  let fixture: ComponentFixture<BuySellPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuySellPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuySellPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
