import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgoLoginFormComponent } from './ngo-login-form.component';

describe('NgoLoginFormComponent', () => {
  let component: NgoLoginFormComponent;
  let fixture: ComponentFixture<NgoLoginFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgoLoginFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgoLoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
