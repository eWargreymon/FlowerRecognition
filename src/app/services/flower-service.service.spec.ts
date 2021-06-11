import { TestBed } from '@angular/core/testing';

import { FlowerServiceService } from './flower-service.service';

describe('FlowerServiceService', () => {
  let service: FlowerServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlowerServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
