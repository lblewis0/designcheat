import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Button4Component } from './button-4.component';

describe('Button4Component', () => {
  let component: Button4Component;
  let fixture: ComponentFixture<Button4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Button4Component]
    });
    fixture = TestBed.createComponent(Button4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
