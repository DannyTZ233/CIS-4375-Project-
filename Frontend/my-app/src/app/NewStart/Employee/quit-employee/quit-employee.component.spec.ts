import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuitEmployeeComponent } from './quit-employee.component';

describe('QuitEmployeeComponent', () => {
  let component: QuitEmployeeComponent;
  let fixture: ComponentFixture<QuitEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuitEmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuitEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
