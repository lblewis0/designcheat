import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Button8Component } from './button-8.component';

describe('Button8Component', () => {
  let component: Button8Component;
  let fixture: ComponentFixture<Button8Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Button8Component]
    });
    fixture = TestBed.createComponent(Button8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
