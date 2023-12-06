import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Button10Component } from './button-10.component';

describe('Button10Component', () => {
  let component: Button10Component;
  let fixture: ComponentFixture<Button10Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Button10Component]
    });
    fixture = TestBed.createComponent(Button10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
