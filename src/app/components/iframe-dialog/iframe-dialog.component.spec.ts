import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IframeDialogComponent } from './iframe-dialog.component';

describe('IframeDialogComponent', () => {
  let component: IframeDialogComponent;
  let fixture: ComponentFixture<IframeDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IframeDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IframeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
