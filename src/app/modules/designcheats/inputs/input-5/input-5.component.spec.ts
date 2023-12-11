import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Input5Component } from './input-5.component';

describe('Input5Component', () => {
  let component: Input5Component;
  let fixture: ComponentFixture<Input5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Input5Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Input5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
