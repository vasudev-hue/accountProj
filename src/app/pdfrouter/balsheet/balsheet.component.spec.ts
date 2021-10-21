import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalsheetComponent } from './balsheet.component';

describe('BalsheetComponent', () => {
  let component: BalsheetComponent;
  let fixture: ComponentFixture<BalsheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalsheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BalsheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
