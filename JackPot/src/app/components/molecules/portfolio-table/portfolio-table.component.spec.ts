import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Portfolio } from 'src/app/models/portfolio.model';
import { JackpotService } from 'src/app/services/jackpot.service';

import { PortfolioTableComponent } from './portfolio-table.component';

describe('PortfolioTableComponent', () => {
  let component: PortfolioTableComponent;
  let fixture: ComponentFixture<PortfolioTableComponent>;
  let jackpotServiceMock: jasmine.SpyObj<JackpotService>;

  const portfolioData: Portfolio[] = [
    {
      "fund": "ABFRL",
      "units": 10,
      "avgcost": 105.15,
      "ltp": "133.45",
      "currentval": 1334.50,
      "pandl": 283,
      "netchg": "26.91",
      "daychg":"0.64"
  }
  ]

  beforeEach(async () => {
    jackpotServiceMock = jasmine.createSpyObj('JackpotService', ['getPortfolioData'])

    await TestBed.configureTestingModule({
      declarations: [ PortfolioTableComponent ],
      providers: [
        {
          provide: JackpotService,
          useValue: jackpotServiceMock
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioTableComponent);
    component = fixture.componentInstance;
    jackpotServiceMock.getPortfolioData.and.returnValue(of(portfolioData))
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set currentVal, netpl, totalInvestment and dataSource', () => {
    expect(component.currentVal).toBeGreaterThan(0);
    expect(component.netpl).toBeGreaterThan(0);
    expect(component.totalInvestment).toBeGreaterThan(0);
    expect(component.dataSource).not.toBeNull();
  });

  describe('cal function', () => {
    it('should set arr, arr1 and arr2 attributes', () => {
      component.netpl = 12.2;
      component.currentVal = 15.5;
      component.totalInvestment = 100.3;
      component.arr = component.arr1 = component.arr2 = [];

      component.cal();

      expect(component.arr.length).toEqual(2);
      expect(component.arr[0]).toEqual('12');
      expect(component.arr1.length).toEqual(2);
      expect(component.arr1[0]).toEqual('15');
      expect(component.arr2.length).toEqual(2);
      expect(component.arr2[0]).toEqual('100');
    })
  })

  describe('search function', () => {
    it('should set dataSource.filter to the given text', () => {
      component.dataSource.filter = "";

      component.search("search");

      expect(component.dataSource.filter).toEqual("search");
    });
  });

  describe("isPositive function", () => {
    it('should return true when input is greater than 0', () => {
      let result = component.isPositive(5);

      expect(result).toBeTrue();
    });

    it('should return false when input is negative or 0', () => {
      let result = component.isPositive(-10);

      expect(result).toBeFalse();
    })
  })
});
