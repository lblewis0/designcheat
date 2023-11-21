import { Component } from '@angular/core';
import { navbarModel, navbarElement} from '../../shared/models/navbarModels';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  navbar: navbarModel = {
    Buttons: [
      {id: 0, value: 'Accueil', isSelected: true},
      {id: 1, value: 'Navbar', isSelected: false},
      {id: 2, value: 'Sidebar', isSelected: false}
    ]};

}

