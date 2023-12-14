import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Badge3Component } from './badge-3.component';

describe('Badge3Component', () => {
  let component: Badge3Component;
  let fixture: ComponentFixture<Badge3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Badge3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Badge3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
