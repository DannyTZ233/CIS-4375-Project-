import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvironmentQ2Component } from './environment-q2.component';

describe('EnvironmentQ2Component', () => {
  let component: EnvironmentQ2Component;
  let fixture: ComponentFixture<EnvironmentQ2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnvironmentQ2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvironmentQ2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
