import { TestBed } from '@angular/core/testing';

import { APicallerService } from './apicaller.service';

describe('APicallerService', () => {
  let service: APicallerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(APicallerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
