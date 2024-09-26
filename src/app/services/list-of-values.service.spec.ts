import { TestBed } from '@angular/core/testing';

import { ListOfValuesService } from './list-of-values.service';
import { HttpClientModule } from '@angular/common/http';

describe('ListOfValuesService', () => {
  let service: ListOfValuesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(ListOfValuesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
