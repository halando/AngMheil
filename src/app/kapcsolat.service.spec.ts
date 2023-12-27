import { TestBed } from '@angular/core/testing';

import { KapcsolatService } from './kapcsolat.service';

describe('KapcsolatService', () => {
  let service: KapcsolatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KapcsolatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
