import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Button7Component } from './button-7.component';

describe('Button7Component', () => {
  let component: Button7Component;
  let fixture: ComponentFixture<Button7Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Button7Component]
    });
    fixture = TestBed.createComponent(Button7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
