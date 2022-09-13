import { TestBed } from '@angular/core/testing';

import { JackpotService } from './jackpot.service';

describe('JackpotService', () => {
  let service: JackpotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JackpotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
