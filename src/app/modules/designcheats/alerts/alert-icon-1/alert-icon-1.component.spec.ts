import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertIcon1Component } from './alert-icon-1.component';

describe('AlertIcon1Component', () => {
  let component: AlertIcon1Component;
  let fixture: ComponentFixture<AlertIcon1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlertIcon1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlertIcon1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
