import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Button3Component } from './button-3.component';

describe('Button3Component', () => {
  let component: Button3Component;
  let fixture: ComponentFixture<Button3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Button3Component]
    });
    fixture = TestBed.createComponent(Button3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
