import { TestBed } from '@angular/core/testing';

import { IntroServService } from './intro-serv.service';

describe('IntroServService', () => {
  let service: IntroServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IntroServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
