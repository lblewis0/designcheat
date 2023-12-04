import { Component } from '@angular/core';
import { liElement, sidebarUlModel } from 'src/app/shared/models/sidebarModels';

@Component({
  selector: 'app-sidebar2',
  templateUrl: './sidebar2.component.html',
  styleUrls: ['./sidebar2.component.scss']
})
export class Sidebar2Component {

  sidebarUl: sidebarUlModel = {
    Buttons: [
      {value: 'Navigation',
       isSelected: false,
       isExpanding: false,
       isContracting: false,
       isExpanded: false, 
       childs: [
        {value: 'Navbars',
         isSelected: false,
         isExpanding: false,
         isContracting: false,
         isExpanded: false,
         childs: [
            {value: 'Navbar 1',
             isSelected: false,
             isExpanding: false,
             isContracting: false,
             isExpanded: false,},
            {value: 'Navbar 2',
             isSelected: false,
             isExpanding: false,
             isContracting: false,
             isExpanded: false},
            {value: 'Navbar items',
             isSelected: false,
             isExpanding: false,
             isContracting: false,
             isExpanded: false}
         ]},
        {value: 'Sidebars',
         isSelected: false,
         isExpanding: false,
         isContracting: false,
         childs: [
            {value: 'Sidebar 1', 
             isSelected: false,
             isExpanding: false,
             isContracting: false}
         ]}
      ]},
      {value: 'Components', 
       isSelected: false,
       isExpanding: false,
       isContracting: false,
       isExpanded: false,
       childs: [
        {value: 'Buttons', 
         isSelected: false,
         isExpanding: false,
         isContracting: false,},
      ]},
    ]
  }

  onClickSideBarButton(button: liElement) : void
  {
      //Ensuite je regarde à tous les autres li présent dans la sidebar
      //Et je change leur valeur en false
      if(this.sidebarUl.Buttons && this.sidebarUl.Buttons.length > 0)
      {
         for(let i = 0; i < this.sidebarUl.Buttons.length;i++)
         {
            console.log(this.sidebarUl.Buttons[i].value);
            
            this.sidebarUl.Buttons[i].isSelected = false;
          
            if(this.sidebarUl.Buttons[i].childs)
            {
               this.unSelect(this.sidebarUl.Buttons[i]);
            }
         }
      }

      //Je reçois en argument un liElement
      //Quoiqu'il arrive j'inverse sa valeur isSelected au click
      button.isSelected = true;

      if(button.isExpanded)
      {
        button.isExpanded = false;
        button.isContracting = true;
        setTimeout(() => {
         button.isContracting = false;
        }, 1000)

      }
      else
      {
        button.isExpanded = true;
        button.isExpanding = true;
        setTimeout(() => {
         button.isExpanding = false;
        }, 1000)
      }

      console.log(this.sidebarUl);
      
  }
    
  unSelect(button: liElement) : void
  {
      if(button.childs && button.childs.length > 0)
      {
         for(let i = 0; i < button.childs.length; i++)
         {
            console.log(button.childs[i].value);

            button.childs[i].isSelected = false;

            this.unSelect(button.childs[i]);
         }
      }
  }

}
