import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertLink4Component } from './alert-link-4.component';

describe('AlertLink4Component', () => {
  let component: AlertLink4Component;
  let fixture: ComponentFixture<AlertLink4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlertLink4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlertLink4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
