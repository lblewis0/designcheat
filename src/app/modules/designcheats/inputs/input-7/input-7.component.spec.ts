import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Input7Component } from './input-7.component';

describe('Input7Component', () => {
  let component: Input7Component;
  let fixture: ComponentFixture<Input7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Input7Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Input7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
