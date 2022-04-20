import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceQ3Component } from './service-q3.component';

describe('ServiceQ3Component', () => {
  let component: ServiceQ3Component;
  let fixture: ComponentFixture<ServiceQ3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceQ3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceQ3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
