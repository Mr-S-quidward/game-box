import { TestBed } from '@angular/core/testing';

import { EffectsControllerService } from './effects-controller.service';

describe('EffectsControllerService', () => {
  let service: EffectsControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EffectsControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
