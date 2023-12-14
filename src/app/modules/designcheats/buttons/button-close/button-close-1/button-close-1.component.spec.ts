import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonClose1Component } from './button-close-1.component';

describe('ButtonClose1Component', () => {
  let component: ButtonClose1Component;
  let fixture: ComponentFixture<ButtonClose1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonClose1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonClose1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
