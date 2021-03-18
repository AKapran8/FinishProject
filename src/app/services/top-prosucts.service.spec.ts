import { TestBed } from '@angular/core/testing';

import { TopProsuctsService } from './top-prosucts.service';

describe('TopProsuctsService', () => {
  let service: TopProsuctsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopProsuctsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
