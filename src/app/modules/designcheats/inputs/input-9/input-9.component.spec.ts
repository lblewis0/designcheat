import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Input9Component } from './input-9.component';

describe('Input9Component', () => {
  let component: Input9Component;
  let fixture: ComponentFixture<Input9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Input9Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Input9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
