import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonSpan1Component } from './button-span-1.component';

describe('ButtonSpan1Component', () => {
  let component: ButtonSpan1Component;
  let fixture: ComponentFixture<ButtonSpan1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonSpan1Component]
    });
    fixture = TestBed.createComponent(ButtonSpan1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
