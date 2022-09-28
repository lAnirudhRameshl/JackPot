import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ButtonTradeComponent } from './button-trade.component';

describe('ButtonTradeComponent', () => {
  let component: ButtonTradeComponent;
  let fixture: ComponentFixture<ButtonTradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonTradeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonTradeComponent);
    component = fixture.componentInstance;
    component.buysell = "";
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should set button style and button text when type is "buy"', () => {
      component.buysell = 'BUY';

      component.ngOnInit()

      expect(component.bs_style).toEqual({
        'background-color': '#44bd32',
        color: 'white',
      });
      expect(component.buttonText).toEqual('BUY');
    });

    it('should set button style and button text when type is "sell"', () => {
      component.buysell = 'SELL';

      component.ngOnInit();

      expect(component.bs_style).toEqual({
        'background-color': '#e84118',
        color: 'white',
      });
      expect(component.buttonText).toEqual('SELL');
    });
  });

  describe('onBtnClick', () => {
    it('should emit "buy" when the button type is "buy"', () => {
      component.buysell = 'BUY';
      fixture.detectChanges();
      let eventSpy = spyOn(component.btnClick, 'emit');

      component.onBtnClick();

      expect(eventSpy).toHaveBeenCalledOnceWith('BUY');
    });

    it('should emit "sell" when the button type is "sell"', () => {
      component.buysell = 'SELL';
      fixture.detectChanges();
      let eventSpy = spyOn(component.btnClick, 'emit');

      component.onBtnClick();

      expect(eventSpy).toHaveBeenCalledOnceWith('SELL');
    });
  });

  describe('HTML template', () => {
    it('should call onBtnClick when button is clicked', () => {
      let onBtnClickSpy = spyOn(component, 'onBtnClick');

      fixture.debugElement.query(By.css('button')).nativeElement.click();

      expect(onBtnClickSpy).toHaveBeenCalledTimes(1);
    })
  })
});
