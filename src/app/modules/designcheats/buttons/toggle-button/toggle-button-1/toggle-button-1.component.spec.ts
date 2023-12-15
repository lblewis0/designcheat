import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleButton1Component } from './toggle-button-1.component';

describe('ToggleButton1Component', () => {
  let component: ToggleButton1Component;
  let fixture: ComponentFixture<ToggleButton1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToggleButton1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToggleButton1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
