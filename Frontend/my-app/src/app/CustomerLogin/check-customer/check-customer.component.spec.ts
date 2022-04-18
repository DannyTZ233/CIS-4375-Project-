import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckCustomerComponent } from './check-customer.component';

describe('CheckCustomerComponent', () => {
  let component: CheckCustomerComponent;
  let fixture: ComponentFixture<CheckCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckCustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
