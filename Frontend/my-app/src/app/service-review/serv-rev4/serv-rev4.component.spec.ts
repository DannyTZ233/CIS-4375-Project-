import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServRev4Component } from './serv-rev4.component';

describe('ServRev4Component', () => {
  let component: ServRev4Component;
  let fixture: ComponentFixture<ServRev4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServRev4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServRev4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
