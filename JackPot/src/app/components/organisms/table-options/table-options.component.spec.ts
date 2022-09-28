import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableOptionsComponent } from './table-options.component';

describe('TableOptionsComponent', () => {
  let component: TableOptionsComponent;
  let fixture: ComponentFixture<TableOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableOptionsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TableOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('search function', () => {
    it('should call callParent function with entered value', () => {
      let callParentSpy = spyOn(component, 'callParent');

      component.search('search');

      expect(callParentSpy).toHaveBeenCalledOnceWith('search');
    });
  });

  describe('callParent', () => {
    it('should emit the given data using childDownload', () => {
      let childDownloadSpy = spyOn(component.childDownload, 'emit');

      component.callParent('data');

      expect(childDownloadSpy).toHaveBeenCalledOnceWith('data');
    });
  });

  describe('download function', () => {
    it('should emit the given data using childEmit', () => {
      let childEmitSpy = spyOn(component.childEmit, 'emit');

      component.download('data');

      expect(childEmitSpy).toHaveBeenCalledOnceWith('data');
    });
  });
});
