import { Component } from '@angular/core';

@Component({
  selector: 'app-input-4',
  templateUrl: './input-4.component.html',
  styleUrl: './input-4.component.scss'
})
export class Input4Component {

  isValid: boolean = false;
  isInvalid: boolean = false;
  isWarning: boolean = false;
  isDefault: boolean = true;

  inputValue: string = '';

  onInputChange() : void
  {
      switch(this.inputValue)
      {
        case 'v':
          this.isValid = true;
          this.isInvalid = false;
          this.isWarning = false;
          this.isDefault = false;
          break;
        case 'i':
          this.isValid = false;
          this.isInvalid = true;
          this.isWarning = false;
          this.isDefault = false;
          break;
        case 'w':
          this.isValid = false;
          this.isInvalid = false;
          this.isWarning = true;
          this.isDefault = false;
          break;
        default:
          this.isValid = false;
          this.isInvalid = false;
          this.isWarning = false;
          this.isDefault = true;
          break;
      }

      console.log(this.inputValue);
  }
}
