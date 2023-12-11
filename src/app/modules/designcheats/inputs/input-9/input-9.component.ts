import { Component } from '@angular/core';

@Component({
  selector: 'app-input-9',
  templateUrl: './input-9.component.html',
  styleUrl: './input-9.component.scss'
})
export class Input9Component {

  isExpanded: boolean = false;

  selectButtonList: string[] = ['US','BE','FR'];
  selectButtonSymbols: string[] = ['$','€','?'];
  currentListElement: string = this.selectButtonList[0];

  onClickDropdownButton() : void
  {
      if(this.isExpanded)
      {
        this.isExpanded = false;
      }
      else
      {
        this.isExpanded = true;
      }
  }

  onLiClick(index: number) : void
  {
    this.currentListElement = this.selectButtonList[index];
  }


}
