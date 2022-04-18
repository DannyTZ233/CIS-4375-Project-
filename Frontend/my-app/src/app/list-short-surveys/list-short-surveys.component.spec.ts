import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListShortSurveysComponent } from './list-short-surveys.component';

describe('ListShortSurveysComponent', () => {
  let component: ListShortSurveysComponent;
  let fixture: ComponentFixture<ListShortSurveysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListShortSurveysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListShortSurveysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
