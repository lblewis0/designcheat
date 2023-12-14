import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconButton1Component } from './icon-button-1.component';

describe('IconButton1Component', () => {
  let component: IconButton1Component;
  let fixture: ComponentFixture<IconButton1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IconButton1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IconButton1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
