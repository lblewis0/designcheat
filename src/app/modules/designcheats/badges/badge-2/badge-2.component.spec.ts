import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Badge2Component } from './badge-2.component';

describe('Badge2Component', () => {
  let component: Badge2Component;
  let fixture: ComponentFixture<Badge2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Badge2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Badge2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
