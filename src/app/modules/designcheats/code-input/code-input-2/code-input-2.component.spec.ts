import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeInput2Component } from './code-input-2.component';

describe('CodeInput2Component', () => {
  let component: CodeInput2Component;
  let fixture: ComponentFixture<CodeInput2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CodeInput2Component]
    });
    fixture = TestBed.createComponent(CodeInput2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
