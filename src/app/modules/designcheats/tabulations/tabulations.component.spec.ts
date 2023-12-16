import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabulationsComponent } from './tabulations.component';

describe('TabulationsComponent', () => {
  let component: TabulationsComponent;
  let fixture: ComponentFixture<TabulationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabulationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TabulationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
