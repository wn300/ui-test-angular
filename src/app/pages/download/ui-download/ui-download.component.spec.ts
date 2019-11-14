import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiDownloadComponent } from './ui-download.component';

describe('UiDownloadComponent', () => {
  let component: UiDownloadComponent;
  let fixture: ComponentFixture<UiDownloadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiDownloadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
