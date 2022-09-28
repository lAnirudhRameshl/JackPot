import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadComponent } from './download.component';

describe('DownloadComponent', () => {
  let component: DownloadComponent;
  let fixture: ComponentFixture<DownloadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownloadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onClicked', () => {
    it('should emit the boolean value it was called with', () => {
      let childDownloadSpy = spyOn(component.childDownload, 'emit');

      component.onClicked(true);

      expect(childDownloadSpy).toHaveBeenCalledOnceWith(true);
    })
  })
});
