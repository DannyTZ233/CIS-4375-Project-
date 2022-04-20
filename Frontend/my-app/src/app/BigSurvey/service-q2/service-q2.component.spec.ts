import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceQ2Component } from './service-q2.component';

describe('ServiceQ2Component', () => {
  let component: ServiceQ2Component;
  let fixture: ComponentFixture<ServiceQ2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceQ2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceQ2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
