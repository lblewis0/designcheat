import { Component } from '@angular/core';
import { navbarModel } from 'src/app/shared/models/navbarModels';

@Component({
  selector: 'app-navbar1',
  templateUrl: './navbar1.component.html',
  styleUrls: ['./navbar1.component.scss']
})
export class Navbar1Component {

  navbar: navbarModel = {
    Buttons: [
      {id: 0, value: 'Accueil', isSelected: true},
      {id: 1, value: 'Navbar', isSelected: false},
      {id: 2, value: 'Sidebar', isSelected: false},
    ],
  };

  onClickNavButton(index: number) : void
  {
    for(let i = 0; i < this.navbar.Buttons.length; i++)
    {
      this.navbar.Buttons[i].isSelected = false;
    }

    this.navbar.Buttons[index].isSelected = true;
  }

}
