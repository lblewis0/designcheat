import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertLink2Component } from './alert-link-2.component';

describe('AlertLink2Component', () => {
  let component: AlertLink2Component;
  let fixture: ComponentFixture<AlertLink2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlertLink2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlertLink2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
