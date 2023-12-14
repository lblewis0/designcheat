import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Badge4Component } from './badge-4.component';

describe('Badge4Component', () => {
  let component: Badge4Component;
  let fixture: ComponentFixture<Badge4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Badge4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Badge4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
