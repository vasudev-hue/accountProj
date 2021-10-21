import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidaterulComponent } from './validaterul.component';

describe('ValidaterulComponent', () => {
  let component: ValidaterulComponent;
  let fixture: ComponentFixture<ValidaterulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidaterulComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidaterulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
