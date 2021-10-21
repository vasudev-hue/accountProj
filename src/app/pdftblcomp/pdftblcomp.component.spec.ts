import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdftblcompComponent } from './pdftblcomp.component';

describe('PdftblcompComponent', () => {
  let component: PdftblcompComponent;
  let fixture: ComponentFixture<PdftblcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdftblcompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdftblcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
