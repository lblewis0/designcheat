import { Component } from '@angular/core';

@Component({
  selector: 'app-code-input-2',
  templateUrl: './code-input-2.component.html',
  styleUrls: ['./code-input-2.component.scss']
})
export class CodeInput2Component {
  editorOptions = {theme: 'vs-dark', language: 'javascript'};
  code: string= 'function x() {\nconsole.log("Hello world!");\n}';
}
