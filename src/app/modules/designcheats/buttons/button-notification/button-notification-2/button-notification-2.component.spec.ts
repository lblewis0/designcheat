import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonNotification2Component } from './button-notification-2.component';

describe('ButtonNotification2Component', () => {
  let component: ButtonNotification2Component;
  let fixture: ComponentFixture<ButtonNotification2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonNotification2Component]
    });
    fixture = TestBed.createComponent(ButtonNotification2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
