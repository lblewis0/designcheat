import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertLink3Component } from './alert-link-3.component';

describe('AlertLink3Component', () => {
  let component: AlertLink3Component;
  let fixture: ComponentFixture<AlertLink3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlertLink3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlertLink3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
