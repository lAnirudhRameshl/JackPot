import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { MarketMover } from 'src/app/models/market-movers.model';
import { JackpotService } from 'src/app/services/jackpot.service';

import { TabsComponent } from './tabs.component';

describe('TabsComponent', () => {
  let component: TabsComponent;
  let fixture: ComponentFixture<TabsComponent>;
  let jackpotServiceSpy: jasmine.SpyObj<JackpotService>;
  const marketMovers: MarketMover[] = [
    {
      name: 'AAPL',
      last: 163.43,
      change: 3.85,
      volume: 102.85,
    },
  ];

  beforeEach(async () => {
    jackpotServiceSpy = jasmine.createSpyObj('JackpotService', [
      'getMostActiveMarketMovers',
      'getGainerMarketMovers',
      'getLoserMarketMovers',
    ]);

    await TestBed.configureTestingModule({
      declarations: [TabsComponent],
      providers: [
        {
          provide: JackpotService,
          useValue: jackpotServiceSpy,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TabsComponent);
    component = fixture.componentInstance;
    jackpotServiceSpy.getMostActiveMarketMovers.and.returnValue(
      of(marketMovers)
    );
    jackpotServiceSpy.getLoserMarketMovers.and.returnValue(of(marketMovers));
    jackpotServiceSpy.getGainerMarketMovers.and.returnValue(of(marketMovers));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('getMostActiveMarketMovers function', () => {
    it('should call getMostActiveMarketMovers service function and set mostActiveMarketMovers', () => {
      component.mostActiveMarketMovers = []
      
      component.getMostActiveMarketMovers();

      expect(jackpotServiceSpy.getMostActiveMarketMovers).toHaveBeenCalledTimes(
        2
      );
      expect(component.mostActiveMarketMovers.length).toEqual(1);
    });
  });

  describe('getGainerMarketMovers function', () => {
    it('should call getGainerMarketMovers service function and set gainerMarketMovers', () => {
      component.gainerMarketMovers = []
      
      component.getGainerMarketMovers();

      expect(jackpotServiceSpy.getGainerMarketMovers).toHaveBeenCalledTimes(
        2
      );
      expect(component.gainerMarketMovers.length).toEqual(1);
    });
  });

  describe('getLoserMarketMovers function', () => {
    it('should call getLoserMarketMovers service function and set loserMarketMovers', () => {
      component.loserMarketMovers = []
      
      component.getLoserMarketMovers();

      expect(jackpotServiceSpy.getLoserMarketMovers).toHaveBeenCalledTimes(
        2
      );
      expect(component.loserMarketMovers.length).toEqual(1);
    });
  });
});
