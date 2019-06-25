import { TestBed } from '@angular/core/testing';

import { ExhibitorsService } from './exhibitors.service';

describe('ExhibitorsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExhibitorsService = TestBed.get(ExhibitorsService);
    expect(service).toBeTruthy();
  });
});
