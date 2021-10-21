import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsarComponent } from './isar.component';

describe('IsarComponent', () => {
  let component: IsarComponent;
  let fixture: ComponentFixture<IsarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IsarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IsarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
