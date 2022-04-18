import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServRev3Component } from './serv-rev3.component';

describe('ServRev3Component', () => {
  let component: ServRev3Component;
  let fixture: ComponentFixture<ServRev3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServRev3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServRev3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
