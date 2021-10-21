import { TestBed } from '@angular/core/testing';

import { BalsheettblService } from './balsheettbl.service';

describe('BalsheettblService', () => {
  let service: BalsheettblService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BalsheettblService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
