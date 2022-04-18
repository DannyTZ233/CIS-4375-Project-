import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtensiveGiveCustomerTokenComponent } from './extensive-give-customer-token.component';

describe('ExtensiveGiveCustomerTokenComponent', () => {
  let component: ExtensiveGiveCustomerTokenComponent;
  let fixture: ComponentFixture<ExtensiveGiveCustomerTokenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtensiveGiveCustomerTokenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtensiveGiveCustomerTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
