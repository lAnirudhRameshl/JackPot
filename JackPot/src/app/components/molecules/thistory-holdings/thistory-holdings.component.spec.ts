import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ITrade } from 'src/app/models/trade';
import { JackpotService } from 'src/app/services/jackpot.service';

import { ThistoryHoldingsComponent } from './thistory-holdings.component';

describe('ThistoryHoldingsComponent', () => {
  let component: ThistoryHoldingsComponent;
  let fixture: ComponentFixture<ThistoryHoldingsComponent>;
  let jackpotServiceMock: jasmine.SpyObj<JackpotService>;

  const tradeHistoryData: ITrade[] = [
    {
      fund: 'NASDAQ',
      units: 10,
      price: 1163.57,
      account: '401K',
      date: Date.prototype,
    },
  ];

  beforeEach(async () => {
    jackpotServiceMock = jasmine.createSpyObj('JackpoService', ['getTrades']);

    await TestBed.configureTestingModule({
      declarations: [ThistoryHoldingsComponent],
      providers: [
        {
          provide: JackpotService,
          useValue: jackpotServiceMock
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ThistoryHoldingsComponent);
    component = fixture.componentInstance;
    jackpotServiceMock.getTrades.and.returnValue(of(tradeHistoryData));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('getTotal function', () => {
    it('should set total as the length of response', () => {
      component.total = 0;

      component.getTotal();

      expect(component.total).toEqual(1);
    });
  });
});
