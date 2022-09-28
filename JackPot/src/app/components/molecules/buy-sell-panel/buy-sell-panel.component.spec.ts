import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarRef, TextOnlySnackBar } from '@angular/material/snack-bar';
import { of } from 'rxjs';
import { TradePopupComponent } from '../../organisms/trade-popup/trade-popup.component';

import { BuySellPanelComponent } from './buy-sell-panel.component';

describe('BuySellPanelComponent', () => {
  let component: BuySellPanelComponent;
  let fixture: ComponentFixture<BuySellPanelComponent>;
  let matSnackBarSpy: jasmine.SpyObj<MatSnackBar>;
  let matDialogSpy: jasmine.SpyObj<MatDialog>;

  beforeEach(async () => {
    matSnackBarSpy = jasmine.createSpyObj('MatSnackBar', ['open']);
    matDialogSpy = jasmine.createSpyObj('MatDialog', ['open']);

    await TestBed.configureTestingModule({
      declarations: [BuySellPanelComponent],
      providers: [
        {
          provide: MatSnackBar,
          useValue: matSnackBarSpy,
        },
        {
          provide: MatDialog,
          useValue: matDialogSpy,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(BuySellPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('openTradeDialog function', () => {
    describe('On successful BUY', () => {
      beforeEach(() => {
        spyOn(component, 'openSnackBar').and.callFake(() => {});
        component.CARD_TICKER = 'TSLA';
      });

      it('should open dialog with correct data and set toast message on market buy', () => {
        matDialogSpy.open.and.returnValue({
          afterClosed: () => {
            return of({ ticker: 'TSLA', qty: 1, price: 0 });
          },
        } as MatDialogRef<unknown>);

        component.openTradeDialog('buy');

        expect(matDialogSpy.open).toHaveBeenCalledWith(TradePopupComponent, {
          width: '48%',
          data: { isBuy: 'true', ticker: 'TSLA' },
        });
        expect(component.toastMessage).toEqual(
          'BUY TSLA x 1 @ MARKET Executed! '
        );
        expect(component.openSnackBar).toHaveBeenCalledTimes(1);
      });

      it('should open buy dialog with correct data and set toast message for normal buy', () => {
        matDialogSpy.open.and.returnValue({
          afterClosed: () => {
            return of({ ticker: 'TSLA', qty: 1, price: 200 });
          },
        } as MatDialogRef<unknown>);

        component.openTradeDialog('buy');

        expect(matDialogSpy.open).toHaveBeenCalledWith(TradePopupComponent, {
          width: '48%',
          data: { isBuy: 'true', ticker: 'TSLA' },
        });
        expect(component.toastMessage).toEqual('BUY TSLA x 1 @ $200 Executed! ');
        expect(component.openSnackBar).toHaveBeenCalledTimes(1);
      });
    });

    describe('On successful SELL', () => {
      beforeEach(() => {
        spyOn(component, 'openSnackBar').and.callFake(() => {});
        component.CARD_TICKER = 'TSLA';
      });

      it('should open dialog with correct data and set toast message on market sell', () => {
        matDialogSpy.open.and.returnValue({
          afterClosed: () => {
            return of({ ticker: 'TSLA', qty: 1, price: 0 });
          },
        } as MatDialogRef<unknown>);

        component.openTradeDialog('sell');

        expect(matDialogSpy.open).toHaveBeenCalledWith(TradePopupComponent, {
          width: '48%',
          data: { isBuy: 'false', ticker: 'TSLA' },
        });
        expect(component.toastMessage).toEqual(
          'SELL TSLA x 1 @ MARKET Executed! '
        );
        expect(component.openSnackBar).toHaveBeenCalledTimes(1);
      });

      it('should open buy dialog with correct data and set toast message for normal buy', () => {
        matDialogSpy.open.and.returnValue({
          afterClosed: () => {
            return of({ ticker: 'TSLA', qty: 1, price: 200 });
          },
        } as MatDialogRef<unknown>);

        component.openTradeDialog('sell');

        expect(matDialogSpy.open).toHaveBeenCalledWith(TradePopupComponent, {
          width: '48%',
          data: { isBuy: 'false', ticker: 'TSLA' },
        });
        expect(component.toastMessage).toEqual('SELL TSLA x 1 @ $200 Executed! ');
        expect(component.openSnackBar).toHaveBeenCalledTimes(1);
      });
    });
  });

  describe('openSnackBar function', () => {
    it('should open snackbar with correct parameters', () => {
      component.toastMessage = "message";
      component.horizontalPosition = "left";
      component.verticalPosition = "bottom"

      component.openSnackBar();
      
      expect(matSnackBarSpy.open).toHaveBeenCalledOnceWith("message", "Ok", {horizontalPosition: 'left', verticalPosition: 'bottom'})
    })
  })
});
