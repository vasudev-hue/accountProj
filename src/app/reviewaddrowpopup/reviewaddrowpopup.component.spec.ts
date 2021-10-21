import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewaddrowpopupComponent } from './reviewaddrowpopup.component';

describe('ReviewaddrowpopupComponent', () => {
  let component: ReviewaddrowpopupComponent;
  let fixture: ComponentFixture<ReviewaddrowpopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewaddrowpopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewaddrowpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
