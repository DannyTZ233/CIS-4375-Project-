import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtenGiveCustomerTokenComponent } from './exten-give-customer-token.component';

describe('ExtenGiveCustomerTokenComponent', () => {
  let component: ExtenGiveCustomerTokenComponent;
  let fixture: ComponentFixture<ExtenGiveCustomerTokenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtenGiveCustomerTokenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtenGiveCustomerTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
