import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonDropdown1Component } from './button-dropdown-1.component';

describe('ButtonDropdown1Component', () => {
  let component: ButtonDropdown1Component;
  let fixture: ComponentFixture<ButtonDropdown1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonDropdown1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonDropdown1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
