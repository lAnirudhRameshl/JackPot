import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableExporterModule } from 'mat-table-exporter';
import { of } from 'rxjs';
import { ITrade } from 'src/app/models/trade';
import { JackpotService } from 'src/app/services/jackpot.service';

import { ThistoryTableComponent } from './thistory-table.component';

describe('ThistoryTableComponent', () => {
  let component: ThistoryTableComponent;
  let fixture: ComponentFixture<ThistoryTableComponent>;
  let jackpotServiceMock: jasmine.SpyObj<JackpotService>;
  const tradeHistoryData: ITrade[] = [
    {
      fund: 'NASDAQ',
      units: 10,
      price: 1163.57,
      account: '401K',
      date: new Date(),
    },
  ];

  beforeEach(async () => {
    jackpotServiceMock = jasmine.createSpyObj('JackpotService', ['getTrades']);

    await TestBed.configureTestingModule({
      declarations: [ThistoryTableComponent],
      imports: [MatTableModule, MatTableExporterModule, MatSortModule, BrowserAnimationsModule],
      providers: [
        {
          provide: JackpotService,
          useValue: jackpotServiceMock,
        }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(ThistoryTableComponent);
    component = fixture.componentInstance;
    jackpotServiceMock.getTrades.and.returnValue(of(tradeHistoryData));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('getAllStocks function', () => {
    it('should call getTrades service and set trades and dataSource', () => {
      component.trades = [];

      component.getAllStocks();

      expect(jackpotServiceMock.getTrades).toHaveBeenCalledTimes(2);
      expect(component.trades.length).toEqual(1);
      expect(component.dataSource).not.toBeNull();
    });
  });

  describe('isPositive function', () => {
    it('should return true when input is positive', () => {
      expect(component.isPositive(10)).toBeTrue();
    });

    it('should return false for 0 and negative', () => {
      expect(component.isPositive(-10)).toBeFalse();
    });
  });

  describe('search function', () => {
    it('should set searchText attribute and filter for the datasource', () => {
      component.searchText = '';
      component.dataSource.filter = '';

      component.search('search');

      expect(component.searchText).toEqual('search');
      expect(component.dataSource.filter).toEqual('search');
    });
  });

  describe('myDownload function', () => {
    it('should call exportTable service function with correct arguments', () => {
      let exportSpy = spyOn(component.exporter, 'exportTable');

      component.myDownload("");

      expect(exportSpy).toHaveBeenCalledOnceWith("csv", {fileName: 'jackpot'})
    })
  })
});
