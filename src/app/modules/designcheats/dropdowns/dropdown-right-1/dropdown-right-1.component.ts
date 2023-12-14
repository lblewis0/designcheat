import { Component } from '@angular/core';

@Component({
  selector: 'app-dropdown-right-1',
  templateUrl: './dropdown-right-1.component.html',
  styleUrl: './dropdown-right-1.component.scss'
})
export class DropdownRight1Component {

  isExpanded: boolean = false;
  isExpanding: boolean = false;
  isContracting: boolean = false;

  constructor () {}

  onClick() : void
  {
    if(this.isExpanded)
        {
          this.isContracting = true;
          setTimeout(() => {
            this.isContracting = false;
          }, 500)
          this.isExpanded = false;
        }
        else
        {
          this.isExpanded = true;
          this.isExpanding = true;
          setTimeout(() => {
            this.isExpanding = false;
          }, 500)
        }
  }

  getClass() : string
  {
    // if(this.isExpanded && !this.isExpanding)
    // {
    //   return 'dropdown-menu'
    // }

    // if(this.isExpanded && this.isExpanding)
    // {
    //   return 'dropdown-menu-expanding'
    // }

    // if(this.isContracting)
    // {
    //   return 'dropdown-menu-contracting'
    // }

    return 'dropdown-menu'
  }

}
