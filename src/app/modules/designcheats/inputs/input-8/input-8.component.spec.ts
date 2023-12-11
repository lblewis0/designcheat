import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Input8Component } from './input-8.component';

describe('Input8Component', () => {
  let component: Input8Component;
  let fixture: ComponentFixture<Input8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Input8Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Input8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
