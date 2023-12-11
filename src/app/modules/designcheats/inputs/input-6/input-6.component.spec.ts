import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Input6Component } from './input-6.component';

describe('Input6Component', () => {
  let component: Input6Component;
  let fixture: ComponentFixture<Input6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Input6Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Input6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
