import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { BackOfficeService } from './back-office.service';

describe('BackOfficeService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
    ]
  }));

  it('should be created', () => {
    const service: BackOfficeService = TestBed.get(BackOfficeService);
    expect(service).toBeTruthy();
  });
});
