import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewTblAddRowComponent } from './review-tbl-add-row.component';

describe('ReviewTblAddRowComponent', () => {
  let component: ReviewTblAddRowComponent;
  let fixture: ComponentFixture<ReviewTblAddRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewTblAddRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewTblAddRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
