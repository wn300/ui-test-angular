import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiUploadComponent } from './ui-upload.component';

describe('UiUploadComponent', () => {
  let component: UiUploadComponent;
  let fixture: ComponentFixture<UiUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
