import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsarComponent } from './bsar.component';

describe('BsarComponent', () => {
  let component: BsarComponent;
  let fixture: ComponentFixture<BsarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BsarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BsarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
