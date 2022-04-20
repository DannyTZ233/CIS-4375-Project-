import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvironmentQ1Component } from './environment-q1.component';

describe('EnvironmentQ1Component', () => {
  let component: EnvironmentQ1Component;
  let fixture: ComponentFixture<EnvironmentQ1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnvironmentQ1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvironmentQ1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
