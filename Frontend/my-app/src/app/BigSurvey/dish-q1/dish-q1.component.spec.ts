import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DishQ1Component } from './dish-q1.component';

describe('DishQ1Component', () => {
  let component: DishQ1Component;
  let fixture: ComponentFixture<DishQ1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DishQ1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DishQ1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
