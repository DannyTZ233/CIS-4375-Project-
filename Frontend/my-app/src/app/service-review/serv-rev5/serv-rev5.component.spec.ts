import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServRev5Component } from './serv-rev5.component';

describe('ServRev5Component', () => {
  let component: ServRev5Component;
  let fixture: ComponentFixture<ServRev5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServRev5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServRev5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
