import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomestateComponent } from './incomestate.component';

describe('IncomestateComponent', () => {
  let component: IncomestateComponent;
  let fixture: ComponentFixture<IncomestateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncomestateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomestateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
