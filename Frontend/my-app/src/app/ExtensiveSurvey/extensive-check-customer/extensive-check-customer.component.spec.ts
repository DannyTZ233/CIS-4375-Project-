import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtensiveCheckCustomerComponent } from './extensive-check-customer.component';

describe('ExtensiveCheckCustomerComponent', () => {
  let component: ExtensiveCheckCustomerComponent;
  let fixture: ComponentFixture<ExtensiveCheckCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtensiveCheckCustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtensiveCheckCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
