import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tabulation1Component } from './tabulation-1.component';

describe('Tabulation1Component', () => {
  let component: Tabulation1Component;
  let fixture: ComponentFixture<Tabulation1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Tabulation1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Tabulation1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
