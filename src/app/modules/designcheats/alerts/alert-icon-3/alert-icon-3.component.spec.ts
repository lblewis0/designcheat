import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertIcon3Component } from './alert-icon-3.component';

describe('AlertIcon3Component', () => {
  let component: AlertIcon3Component;
  let fixture: ComponentFixture<AlertIcon3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlertIcon3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlertIcon3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
