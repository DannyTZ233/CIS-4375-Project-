import { TestBed } from '@angular/core/testing';

import { DishCategoriesService } from './dish-categories.service';

describe('DishCategoriesService', () => {
  let service: DishCategoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DishCategoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
