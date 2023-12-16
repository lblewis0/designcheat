import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tabulation3Component } from './tabulation-3.component';

describe('Tabulation3Component', () => {
  let component: Tabulation3Component;
  let fixture: ComponentFixture<Tabulation3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Tabulation3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Tabulation3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
