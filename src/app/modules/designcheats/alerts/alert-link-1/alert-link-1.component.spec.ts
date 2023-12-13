import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertLink1Component } from './alert-link-1.component';

describe('AlertLink1Component', () => {
  let component: AlertLink1Component;
  let fixture: ComponentFixture<AlertLink1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlertLink1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlertLink1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
