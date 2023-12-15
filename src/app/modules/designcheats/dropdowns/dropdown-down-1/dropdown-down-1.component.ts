import { Component } from '@angular/core';

@Component({
  selector: 'app-dropdown-down-1',
  templateUrl: './dropdown-down-1.component.html',
  styleUrl: './dropdown-down-1.component.scss'
})
export class DropdownDown1Component {

  isExpanded: boolean = true;

  childs: any[] = [
    {isExpanded: true},
    {isExpanded: false},
    {isExpanded: false}
  ]

  constructor () {}

  onClickChild(index: number) : void
  {
    
    let child = this.childs[index];

    if(child.isExpanded)
    {
      this.childs[index].isExpanded = false;
    }
    else
    {
      this.childs[index].isExpanded = true;
    }

  }

  onClick() : void
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

  onHover(index: number) : void
  {
    for(let i = 0; i < this.childs.length; i++)
    {
      if(i !== index)
      {
        this.childs[i].isExpanded = false;
      }
    }
  }

}
