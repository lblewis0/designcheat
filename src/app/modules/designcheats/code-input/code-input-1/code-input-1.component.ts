import { AfterViewChecked, AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { codeInputModel } from 'src/app/shared/models/codeInputModels';

@Component({
  selector: 'app-code-input-1',
  templateUrl: './code-input-1.component.html',
  styleUrls: ['./code-input-1.component.scss']
})
export class CodeInput1Component implements AfterViewChecked {

  @ViewChild('inputCmd1') inputCmd1!: ElementRef;
  @ViewChild('inputCmd2') inputCmd2!: ElementRef;
  @ViewChild('inputCmd3') inputCmd3!: ElementRef;
  @ViewChild('inputCmd4') inputCmd4!: ElementRef;

  InputValue: string = "";
  ignoredKeys: string[] = ['Shift','Control','Meta','Alt','CapsLock','NumLock','AltGraph','Escape','AudioVolumeMute','AudioVolumeDown','AudioVolumeUp','Insert','MediaPlayPause','MediaTrackPrevious','MediaTrackNext']

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

    if(!this.ignoredKeys.includes(event.key))
    {
      switch (event.key) {
        case 'Backspace':
          if(this.InputCode.Col > 0)
          {
            this.onInputBackspace();
          }
          break;
        case 'Delete':
          let activeLine = this.InputCode.Lines[this.InputCode.Ln].fullLine;
          if(activeLine)
          {
             if(this.InputCode.Col < activeLine.length)
             {
                this.onInputDelete();
             }
          }
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

  }

  onValueChange(): void {
    console.log('onValueChange()');
    console.log('Initial col: ' + this.InputCode.Col);

    let activeLine = this.InputCode.Lines[this.InputCode.Ln].fullLine;

    if(this.InputValue === '')
    {
      this.InputValue = ' ';
    }

    console.log(`Input value: '${this.InputValue}'`);

    console.log('FullLine before: ' + activeLine);

    let newLine = '';

    if (activeLine) {
      if (this.InputCode.Col === 0) {
        console.log("true");

        newLine = this.InputValue.concat(activeLine);
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

    if(this.InputCode.Col > 0)
    {
      this.InputCode.Col -= 1;
    }
    else
    {
      console.log('Col 0');
      
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

  ngAfterViewChecked(): void {

    

    if(this.InputCode.Col === 0)
    {
       this.inputCmd1.nativeElement.focus();
    }

    if(this.InputCode.Col === this.InputCode.Lines[this.InputCode.Ln].fullLine?.length)
    {
      this.inputCmd2.nativeElement.focus();
    }

    if(this.InputCode.Col > 0 && this.InputCode.Col !== this.InputCode.Lines[this.InputCode.Ln].fullLine?.length)
    {
      this.inputCmd3.nativeElement.focus();
    }
  }

}
