import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeInput1Component } from './code-input-1.component';

describe('CodeInput1Component', () => {
  let component: CodeInput1Component;
  let fixture: ComponentFixture<CodeInput1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CodeInput1Component]
    });
    fixture = TestBed.createComponent(CodeInput1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
