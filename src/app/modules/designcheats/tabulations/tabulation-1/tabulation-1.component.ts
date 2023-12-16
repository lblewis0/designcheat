import { Component } from '@angular/core';

@Component({
  selector: 'app-tabulation-1',
  templateUrl: './tabulation-1.component.html',
  styleUrl: './tabulation-1.component.scss'
})
export class Tabulation1Component {

  tabs: any = {
    Tabs: [
      {value: 'Accueil', isSelected: true},
      {value: 'Navbar', isSelected: false},
      {value: 'Sidebar', isSelected: false},
    ],
  };

  onClickTab(index: number) : void
  {
    for(let i = 0; i < this.tabs.Tabs.length; i++)
    {
      this.tabs.Tabs[i].isSelected = false;
    }

    this.tabs.Tabs[index].isSelected = true;
  }

}
