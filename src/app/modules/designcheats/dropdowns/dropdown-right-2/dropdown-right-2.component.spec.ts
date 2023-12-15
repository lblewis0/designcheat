import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownRight2Component } from './dropdown-right-2.component';

describe('DropdownRight2Component', () => {
  let component: DropdownRight2Component;
  let fixture: ComponentFixture<DropdownRight2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DropdownRight2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DropdownRight2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
