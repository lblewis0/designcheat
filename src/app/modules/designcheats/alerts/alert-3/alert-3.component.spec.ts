import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Alert3Component } from './alert-3.component';

describe('Alert3Component', () => {
  let component: Alert3Component;
  let fixture: ComponentFixture<Alert3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Alert3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Alert3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
