import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonIcon1Component } from './button-icon-1.component';

describe('ButtonIcon1Component', () => {
  let component: ButtonIcon1Component;
  let fixture: ComponentFixture<ButtonIcon1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonIcon1Component]
    });
    fixture = TestBed.createComponent(ButtonIcon1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
