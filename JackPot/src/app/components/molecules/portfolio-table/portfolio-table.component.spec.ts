import { ComponentFixture, TestBed } from '@angular/core/testing';
import { utc } from 'moment';
import { Observable, of } from 'rxjs';
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
