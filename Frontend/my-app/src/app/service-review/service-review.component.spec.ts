import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceReviewComponent } from './service-review.component';

describe('ServiceReviewComponent', () => {
  let component: ServiceReviewComponent;
  let fixture: ComponentFixture<ServiceReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
