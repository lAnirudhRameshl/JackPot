import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThistoryHoldingsComponent } from './thistory-holdings.component';

describe('ThistoryHoldingsComponent', () => {
  let component: ThistoryHoldingsComponent;
  let fixture: ComponentFixture<ThistoryHoldingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThistoryHoldingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThistoryHoldingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
