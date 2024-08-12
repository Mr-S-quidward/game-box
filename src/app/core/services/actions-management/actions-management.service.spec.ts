import { TestBed } from '@angular/core/testing';

import { ActionsManagementService } from './actions-management.service';

describe('ManageActionsService', () => {
  let service: ActionsManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActionsManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
