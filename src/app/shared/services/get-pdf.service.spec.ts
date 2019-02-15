import { TestBed } from '@angular/core/testing';

import { GetPdfService } from './get-pdf.service';

describe('GetPdfService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetPdfService = TestBed.get(GetPdfService);
    expect(service).toBeTruthy();
  });
});
