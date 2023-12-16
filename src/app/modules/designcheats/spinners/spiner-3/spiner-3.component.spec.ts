import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Spiner3Component } from './spiner-3.component';

describe('Spiner3Component', () => {
  let component: Spiner3Component;
  let fixture: ComponentFixture<Spiner3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Spiner3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Spiner3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
