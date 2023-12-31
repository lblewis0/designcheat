import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Accordion1Component } from './accordion-1.component';

describe('Accordion1Component', () => {
  let component: Accordion1Component;
  let fixture: ComponentFixture<Accordion1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Accordion1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Accordion1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
