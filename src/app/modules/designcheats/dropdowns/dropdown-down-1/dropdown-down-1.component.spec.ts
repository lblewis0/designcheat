import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownDown1Component } from './dropdown-down-1.component';

describe('DropdownDown1Component', () => {
  let component: DropdownDown1Component;
  let fixture: ComponentFixture<DropdownDown1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DropdownDown1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DropdownDown1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
