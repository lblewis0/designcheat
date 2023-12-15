import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Spiner2Component } from './spiner-2.component';

describe('Spiner2Component', () => {
  let component: Spiner2Component;
  let fixture: ComponentFixture<Spiner2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Spiner2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Spiner2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
