import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiveCustomerTokenComponent } from './give-customer-token.component';

describe('GiveCustomerTokenComponent', () => {
  let component: GiveCustomerTokenComponent;
  let fixture: ComponentFixture<GiveCustomerTokenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiveCustomerTokenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiveCustomerTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
