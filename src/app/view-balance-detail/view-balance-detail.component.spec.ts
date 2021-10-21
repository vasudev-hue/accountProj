import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBalanceDetailComponent } from './view-balance-detail.component';

describe('ViewBalanceDetailComponent', () => {
  let component: ViewBalanceDetailComponent;
  let fixture: ComponentFixture<ViewBalanceDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewBalanceDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBalanceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
