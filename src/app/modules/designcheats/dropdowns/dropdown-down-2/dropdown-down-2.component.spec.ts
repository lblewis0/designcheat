import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownDown2Component } from './dropdown-down-2.component';

describe('DropdownDown2Component', () => {
  let component: DropdownDown2Component;
  let fixture: ComponentFixture<DropdownDown2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DropdownDown2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DropdownDown2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
