import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Button9Component } from './button-9.component';

describe('Button9Component', () => {
  let component: Button9Component;
  let fixture: ComponentFixture<Button9Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Button9Component]
    });
    fixture = TestBed.createComponent(Button9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
