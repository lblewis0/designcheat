import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownRight1Component } from './dropdown-right-1.component';

describe('DropdownRight1Component', () => {
  let component: DropdownRight1Component;
  let fixture: ComponentFixture<DropdownRight1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DropdownRight1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DropdownRight1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
