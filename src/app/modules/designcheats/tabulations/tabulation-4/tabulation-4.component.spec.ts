import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tabulation4Component } from './tabulation-4.component';

describe('Tabulation4Component', () => {
  let component: Tabulation4Component;
  let fixture: ComponentFixture<Tabulation4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Tabulation4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Tabulation4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
