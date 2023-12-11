import { Component } from '@angular/core';

@Component({
  selector: 'app-input-2',
  templateUrl: './input-2.component.html',
  styleUrls: ['./input-2.component.scss']
})
export class Input2Component {

  isExpanded: boolean = false;

  selectButtonList: string[] = ['USD','EUR','CAD'];
  selectButtonSymbols: string[] = ['$','€','?'];
  currentListElement: string = this.selectButtonList[0];
  currentListSymbol: string = this.selectButtonSymbols[0];

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
    this.currentListSymbol = this.selectButtonSymbols[index];
  }

}
