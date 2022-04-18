import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEmpResponseComponent } from './create-emp-response.component';

describe('CreateEmpResponseComponent', () => {
  let component: CreateEmpResponseComponent;
  let fixture: ComponentFixture<CreateEmpResponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEmpResponseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEmpResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
