import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertIcon4Component } from './alert-icon-4.component';

describe('AlertIcon4Component', () => {
  let component: AlertIcon4Component;
  let fixture: ComponentFixture<AlertIcon4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlertIcon4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlertIcon4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
