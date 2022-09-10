import { TestBed } from '@angular/core/testing';

import { ServidorFireService } from './servidor-fire.service';

describe('ServidorFireService', () => {
  let service: ServidorFireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServidorFireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
