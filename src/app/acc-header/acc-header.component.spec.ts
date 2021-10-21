import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccHeaderComponent } from './acc-header.component';

describe('AccHeaderComponent', () => {
  let component: AccHeaderComponent;
  let fixture: ComponentFixture<AccHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
