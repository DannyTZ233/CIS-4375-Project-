import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceQ4Component } from './service-q4.component';

describe('ServiceQ4Component', () => {
  let component: ServiceQ4Component;
  let fixture: ComponentFixture<ServiceQ4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceQ4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceQ4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
