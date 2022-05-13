/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SubCategoriesService } from './SubCategories.service';

describe('Service: SubCategories', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SubCategoriesService]
    });
  });

  it('should ...', inject([SubCategoriesService], (service: SubCategoriesService) => {
    expect(service).toBeTruthy();
  }));
});
