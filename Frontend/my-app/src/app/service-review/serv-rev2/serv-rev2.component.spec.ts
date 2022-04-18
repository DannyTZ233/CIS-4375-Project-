import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServRev2Component } from './serv-rev2.component';

describe('ServRev2Component', () => {
  let component: ServRev2Component;
  let fixture: ComponentFixture<ServRev2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServRev2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServRev2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
