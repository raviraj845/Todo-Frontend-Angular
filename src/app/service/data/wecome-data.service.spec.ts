import { TestBed } from '@angular/core/testing';

import { WecomeDataService } from './wecome-data.service';

describe('WecomeDataService', () => {
  let service: WecomeDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WecomeDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
