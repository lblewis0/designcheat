import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Input4Component } from './input-4.component';

describe('Input4Component', () => {
  let component: Input4Component;
  let fixture: ComponentFixture<Input4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Input4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Input4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
