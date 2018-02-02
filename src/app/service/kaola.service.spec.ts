import { TestBed, inject } from '@angular/core/testing';

import { KaolaService } from './kaola.service';

describe('KaolaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KaolaService]
    });
  });

  it('should be created', inject([KaolaService], (service: KaolaService) => {
    expect(service).toBeTruthy();
  }));
});
