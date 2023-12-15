import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Spiner1Component } from './spiner-1.component';

describe('Spiner1Component', () => {
  let component: Spiner1Component;
  let fixture: ComponentFixture<Spiner1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Spiner1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Spiner1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
