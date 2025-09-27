import { TestBed } from '@angular/core/testing';

import { EmpoyedService } from './empoyed-service';

describe('EmpoyedService', () => {
  let service: EmpoyedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpoyedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
