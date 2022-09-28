import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableHeaderComponent } from './table-header.component';

describe('TableHeaderComponent', () => {
  let component: TableHeaderComponent;
  let fixture: ComponentFixture<TableHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('callParent function', () => {
    it('should emit the entered data', () => {
      let childEmitSpy = spyOn(component.childEmit, 'emit');

      component.callParent('data');

      expect(childEmitSpy).toHaveBeenCalledOnceWith('data');
    });
  });
});
