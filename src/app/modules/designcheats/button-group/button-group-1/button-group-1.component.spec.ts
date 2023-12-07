import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonGroup1Component } from './button-group-1.component';

describe('ButtonGroup1Component', () => {
  let component: ButtonGroup1Component;
  let fixture: ComponentFixture<ButtonGroup1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonGroup1Component]
    });
    fixture = TestBed.createComponent(ButtonGroup1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
