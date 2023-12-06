import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonNotification1Component } from './button-notification-1.component';

describe('ButtonNotification1Component', () => {
  let component: ButtonNotification1Component;
  let fixture: ComponentFixture<ButtonNotification1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonNotification1Component]
    });
    fixture = TestBed.createComponent(ButtonNotification1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
