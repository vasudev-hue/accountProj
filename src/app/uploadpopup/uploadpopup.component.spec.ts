import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadpopupComponent } from './uploadpopup.component';

describe('UploadpopupComponent', () => {
  let component: UploadpopupComponent;
  let fixture: ComponentFixture<UploadpopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadpopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
