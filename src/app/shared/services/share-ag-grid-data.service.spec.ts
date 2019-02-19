import { TestBed } from '@angular/core/testing';

import { ShareAgGridDataService } from './share-ag-grid-data.service';

describe('ShareAgGridDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShareAgGridDataService = TestBed.get(ShareAgGridDataService);
    expect(service).toBeTruthy();
  });
});
