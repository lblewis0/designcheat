import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Progress1Component } from './progress-1.component';

describe('Progress1Component', () => {
  let component: Progress1Component;
  let fixture: ComponentFixture<Progress1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Progress1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Progress1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
