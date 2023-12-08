import { Component, Input } from '@angular/core';
import { codeInputModel } from 'src/app/shared/models/codeInputModels';

@Component({
  selector: 'app-code-input-1',
  templateUrl: './code-input-1.component.html',
  styleUrls: ['./code-input-1.component.scss']
})
export class CodeInput1Component {

  InputValue: string = "";
  backspaceStillDown = false;
  deleteStillDown = false;

  InputCode: codeInputModel = {
    Ln: 0,
    Col: 0,
    Input: '',
    Lines: [
      {
        fullLine: 'ceci est du code motherfucker',
        Blocks: []
      },
      {
        fullLine: 'ceci est du code motherfucker',
        Blocks: []
      }
    ]
  }

  constructor() { }

  onKeyDown(event: KeyboardEvent) {

    console.log(event.key);

    switch (event.key) {
      case 'Backspace':
        this.backspaceStillDown = true;
        this.onInputBackspace();
        break;
      case 'Delete':
        this.deleteStillDown = true;
        this.onInputDelete();
        break;
      case 'ArrowLeft':
        this.onArrowLeft();
        break;
      case 'ArrowRight':
        this.onArrowRight();
        break;
      default:
        this.onValueChange();
    }

  }

  onKeyUp(event: KeyboardEvent) {
    // switch (event.key) {
    //   case 'Backspace':
    //     this.backspaceStillDown = false;
    //     break;
    //   case 'Delete':
    //     this.deleteStillDown = false;
    //     break;
    //   default:
    //     this.onValueChange();
    // }
  }

  onValueChange(): void {
    console.log('onValueChange()');
    console.log('Initial col: ' + this.InputCode.Col);

    let activeLine = this.InputCode.Lines[this.InputCode.Ln].fullLine;

    console.log('Input value: ' + this.InputValue);
    console.log('FullLine before: ' + activeLine);

    let newLine = '';

    if (activeLine) {
      if (this.InputCode.Col === 0) {
        console.log("true");

        newLine = this.InputValue + activeLine;
      }

      if (this.InputCode.Col === activeLine.length) {
        newLine = activeLine + this.InputValue;
      }

      if (this.InputCode.Col > 0 && this.InputCode.Col < activeLine.length) {
        console.log(`activeLine : ${activeLine}`)

        let substring1 = activeLine.substring(0, this.InputCode.Col);
        console.log(`substring1 (0, ${this.InputCode.Col}) : ${substring1}`);

        let substring2 = activeLine.substring(this.InputCode.Col, activeLine.length);
        console.log(`substring2 (${this.InputCode.Col}, ${activeLine.length}) : ${substring2}`);

        newLine = substring1 + this.InputValue + substring2;
      }
    }

    this.InputCode.Lines[this.InputCode.Ln].fullLine = newLine;
    this.InputCode.Col += this.InputValue.length;
    this.resetInput();

    console.log('FullLine after: ' + newLine);
    console.log('Final Col:' + this.InputCode.Col)
  }

  onInputBackspace(): void {
    console.log('onInputBackspace()');
    console.log('Initial col: ' + this.InputCode.Col);

    let activeLine = this.InputCode.Lines[this.InputCode.Ln].fullLine;

    console.log('Input value: ' + this.InputValue);
    console.log('FullLine before: ' + activeLine);

    let newLine = '';

    if (activeLine) {
      if (this.InputCode.Col > 0) {
        if (this.InputCode.Col === activeLine.length) {
          newLine = activeLine.substring(0, activeLine.length - 1)
        }
        if (this.InputCode.Col > 0 && this.InputCode.Col < activeLine.length) {
          console.log(`activeLine : ${activeLine}`)

          let substring1 = activeLine.substring(0, this.InputCode.Col - 1);
          console.log(`substring1 (0, ${this.InputCode.Col - 1}) : ${substring1}`);

          let substring2 = activeLine.substring(this.InputCode.Col, activeLine.length);
          console.log(`substring2 (${this.InputCode.Col}, ${activeLine.length}) : ${substring2}`);

          newLine = substring1 + this.InputValue + substring2;
        }
      }
    }

    this.InputCode.Lines[this.InputCode.Ln].fullLine = newLine;

    if (this.InputValue.length === 0) {
      this.InputCode.Col -= 1;
    }

    console.log('FullLine after: ' + newLine);
    console.log('Final Col:' + this.InputCode.Col)
  }

  onInputDelete(): void {
    console.log('onInputDelete()');
    console.log('Initial col: ' + this.InputCode.Col);
  
    let activeLine = this.InputCode.Lines[this.InputCode.Ln].fullLine;
  
    console.log('Input value: ' + this.InputValue);
    console.log('FullLine before: ' + activeLine);
  
    let newLine = '';
  
    if(activeLine) {
      if (this.InputCode.Col < activeLine.length) {
        if (this.InputCode.Col === 0) {
          newLine = activeLine.substring(1, activeLine.length)
        }
        if (this.InputCode.Col > 0 && this.InputCode.Col < activeLine.length) {
          console.log(`activeLine : ${activeLine}`)
  
          let substring1 = activeLine.substring(0, this.InputCode.Col);
          console.log(`substring1 (0, ${this.InputCode.Col - 1}) : ${substring1}`);
  
          let substring2 = activeLine.substring(this.InputCode.Col + 1, activeLine.length);
          console.log(`substring2 (${this.InputCode.Col + 1}, ${activeLine.length}) : ${substring2}`);
  
          newLine = substring1 + this.InputValue + substring2;
        }
      }
    }
  
      this.InputCode.Lines[this.InputCode.Ln].fullLine = newLine;
  
    console.log('FullLine after: ' + newLine);
    console.log('Final Col:' + this.InputCode.Col)
  
  }

  onArrowLeft(): void {

    console.log('onArrowLeft()');
    if(this.InputCode.Col > 0)
    {
      this.InputCode.Col -= 1;
    }
  }

  onArrowRight() : void {

    console.log('onArrowRight()');
    let activeLine = this.InputCode.Lines[this.InputCode.Ln].fullLine

    if(activeLine)
    {
      if(this.InputCode.Col < activeLine.length)
      {
        this.InputCode.Col += 1;
      }
    }
     
  }
  
  resetInput() {
    this.InputValue = "" as string;
  }

}
