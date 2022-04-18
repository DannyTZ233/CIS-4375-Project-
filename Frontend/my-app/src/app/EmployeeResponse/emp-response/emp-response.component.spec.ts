import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpResponseComponent } from './emp-response.component';

describe('EmpResponseComponent', () => {
  let component: EmpResponseComponent;
  let fixture: ComponentFixture<EmpResponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpResponseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
