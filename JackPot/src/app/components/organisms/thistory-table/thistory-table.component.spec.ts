import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThistoryTableComponent } from './thistory-table.component';

describe('ThistoryTableComponent', () => {
  let component: ThistoryTableComponent;
  let fixture: ComponentFixture<ThistoryTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThistoryTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThistoryTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
