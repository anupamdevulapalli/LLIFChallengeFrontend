import { TestBed } from '@angular/core/testing';

import { SearchFileService } from './search-file.service';

describe('SearchFileService', () => {
  let service: SearchFileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchFileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
