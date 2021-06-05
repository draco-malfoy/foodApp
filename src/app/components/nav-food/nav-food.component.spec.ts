import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavFoodComponent } from './nav-food.component';

describe('NavFoodComponent', () => {
  let component: NavFoodComponent;
  let fixture: ComponentFixture<NavFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavFoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
