import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccFooterComponent } from './acc-footer.component';

describe('AccFooterComponent', () => {
  let component: AccFooterComponent;
  let fixture: ComponentFixture<AccFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
