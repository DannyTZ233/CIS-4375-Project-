import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtensiveAddCustomerComponent } from './extensive-add-customer.component';

describe('ExtensiveAddCustomerComponent', () => {
  let component: ExtensiveAddCustomerComponent;
  let fixture: ComponentFixture<ExtensiveAddCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtensiveAddCustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtensiveAddCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
