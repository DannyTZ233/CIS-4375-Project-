import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServRev1Component } from './serv-rev1.component';

describe('ServRev1Component', () => {
  let component: ServRev1Component;
  let fixture: ComponentFixture<ServRev1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServRev1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServRev1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
