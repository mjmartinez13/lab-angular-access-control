import { TestBed, inject } from '@angular/core/testing';

import { AccessLogService } from './access-log.service';

describe('AccessLogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccessLogService]
    });
  });

  it('should ...', inject([AccessLogService], (service: AccessLogService) => {
    expect(service).toBeTruthy();
  }));
});
