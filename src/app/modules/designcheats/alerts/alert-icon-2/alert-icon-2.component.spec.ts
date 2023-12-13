import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertIcon2Component } from './alert-icon-2.component';

describe('AlertIcon2Component', () => {
  let component: AlertIcon2Component;
  let fixture: ComponentFixture<AlertIcon2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlertIcon2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlertIcon2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
