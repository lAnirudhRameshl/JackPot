import { NO_ERRORS_SCHEMA } from '@angular/compiler';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { TradePopupComponent } from './trade-popup.component';

describe('TradePopupComponent', () => {
  let component: TradePopupComponent;
  let fixture: ComponentFixture<TradePopupComponent>;
  let dialogRefSpy: jasmine.SpyObj<MatDialogRef<TradePopupComponent>>;

  beforeEach(async () => {
    dialogRefSpy = jasmine.createSpyObj('MatDialogRef', ['close']);

    await TestBed.configureTestingModule({
      declarations: [ TradePopupComponent ],
      providers: [
        {
          provide: MAT_DIALOG_DATA,
          useValue: {isBuy: 'true', ticker: 'AAPL'}
        },
        {
          provide: MatDialogRef,
          useValue: dialogRefSpy
        }
      ],
      imports: [FormsModule],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TradePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('executeOrder function', () => {
    it('should set toastData and call close of dialogRef', () => {
      component.toastData = {};
      component.model = {ticker: 'AAPL', qty: 5, price: 200};

      component.executeOrder66();

      expect(component.toastData).toEqual({ticker: 'AAPL', qty: 5, price: 200});
      expect(dialogRefSpy.close).toHaveBeenCalledTimes(1);
    })
  })
});
