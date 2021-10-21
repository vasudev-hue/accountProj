import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdflipdocComponent } from './pdflipdoc.component';

describe('PdflipdocComponent', () => {
  let component: PdflipdocComponent;
  let fixture: ComponentFixture<PdflipdocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdflipdocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdflipdocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
