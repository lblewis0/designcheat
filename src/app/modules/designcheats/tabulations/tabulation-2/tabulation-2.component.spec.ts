import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tabulation2Component } from './tabulation-2.component';

describe('Tabulation2Component', () => {
  let component: Tabulation2Component;
  let fixture: ComponentFixture<Tabulation2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Tabulation2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Tabulation2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
