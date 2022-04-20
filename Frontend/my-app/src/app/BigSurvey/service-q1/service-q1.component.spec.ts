import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceQ1Component } from './service-q1.component';

describe('ServiceQ1Component', () => {
  let component: ServiceQ1Component;
  let fixture: ComponentFixture<ServiceQ1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceQ1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceQ1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
