import { Component } from '@angular/core';
import { navbarModel } from 'src/app/shared/models/navbarModels';
import { liElement, sidebarUlModel } from 'src/app/shared/models/sidebarModels';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  sidebar: sidebarUlModel = {
    Buttons: [
      {value: 'Templates', 
       isSelected: false,
       isExpanding: false,
       isContracting: false,
       isExpanded: false, 
       childs: [
        {value: 'Navbars',
         route: '/navbars', 
         isSelected: false,
         isExpanding: false,
         isContracting: false,
         isExpanded: false,
         childs: [
            {value: 'Navbar 1',
             route: '/navbars',
             isSelected: false,
             isExpanding: false,
             isContracting: false,
             isExpanded: false,},
            {value: 'Navbar 2',
             route: '/navbars',
             isSelected: false,
             isExpanding: false,
             isContracting: false,
             isExpanded: false},
            {value: 'Navbar items',
             route: '/navbars',
             isSelected: false,
             isExpanding: false,
             isContracting: false,
             isExpanded: false}
         ]},
        {value: 'Sidebars',
         route: '/sidebars', 
         isSelected: false,
         isExpanding: false,
         isContracting: false,
         childs: [
            {value: 'Sidebar 1',
             route: '/sidebars', 
             isSelected: false,
             isExpanding: false,
             isContracting: false}
         ]},
         {value: 'Backgrounds',
         route: '/backgrounds', 
         isSelected: false,
         isExpanding: false,
         isContracting: false,
         isExpanded: false}
      ]},
      {value: 'Components', 
       isSelected: false,
       isExpanding: false,
       isContracting: false,
       isExpanded: false,
       childs: [
         {value: 'Accordion', 
         isSelected: false,
         isExpanding: false,
         isContracting: false},
         {value: 'Alerts', 
         isSelected: false,
         isExpanding: false,
         isContracting: false},
         {value: 'Badge', 
         isSelected: false,
         isExpanding: false,
         isContracting: false},
         {value: 'Breadcrumb', 
         isSelected: false,
         isExpanding: false,
         isContracting: false},
         {value: 'Buttons',
         route: '/buttons', 
         isSelected: false,
         isExpanding: false,
         isContracting: false},
         {value: 'Button group',
         route: '/button-group', 
         isSelected: false,
         isExpanding: false,
         isContracting: false},
         {value: 'Card', 
         isSelected: false,
         isExpanding: false,
         isContracting: false},
         {value: 'Carousel', 
         isSelected: false,
         isExpanding: false,
         isContracting: false},
         {value: 'Close button', 
         isSelected: false,
         isExpanding: false,
         isContracting: false},
         {value: 'Collapse', 
         isSelected: false,
         isExpanding: false,
         isContracting: false},
         {value: 'Code input',
         route: '/code-input' ,
         isSelected: false,
         isExpanding: false,
         isContracting: false},
         {value: 'Dropdowns', 
         isSelected: false,
         isExpanding: false,
         isContracting: false},
         {value: 'List group', 
         isSelected: false,
         isExpanding: false,
         isContracting: false},
         {value: 'Modal', 
         isSelected: false,
         isExpanding: false,
         isContracting: false},
         {value: 'Navbar', 
         isSelected: false,
         isExpanding: false,
         isContracting: false},
         {value: 'Navs & tabs', 
         isSelected: false,
         isExpanding: false,
         isContracting: false},
         {value: 'Offcanvas', 
         isSelected: false,
         isExpanding: false,
         isContracting: false},
         {value: 'Pagination', 
         isSelected: false,
         isExpanding: false,
         isContracting: false},
         {value: 'Placeholders', 
         isSelected: false,
         isExpanding: false,
         isContracting: false},
         {value: 'Popovers', 
         isSelected: false,
         isExpanding: false,
         isContracting: false},
         {value: 'Progress', 
         isSelected: false,
         isExpanding: false,
         isContracting: false},
         {value: 'Scrollspy', 
         isSelected: false,
         isExpanding: false,
         isContracting: false},
         {value: 'Spinners', 
         isSelected: false,
         isExpanding: false,
         isContracting: false},
         {value: 'Toasts', 
         isSelected: false,
         isExpanding: false,
         isContracting: false},
         {value: 'Tooltips', 
         isSelected: false,
         isExpanding: false,
         isContracting: false}
      ]},
    ]
  }

  onClickSideBarButton(button: liElement) : void
  {
      //Ensuite je regarde à tous les autres li présent dans la sidebar
      //Et je change leur valeur en false
      if(this.sidebar.Buttons && this.sidebar.Buttons.length > 0)
      {
         for(let i = 0; i < this.sidebar.Buttons.length;i++)
         {
            console.log(this.sidebar.Buttons[i].value);
            
            this.sidebar.Buttons[i].isSelected = false;
          
            if(this.sidebar.Buttons[i].childs)
            {
               this.unSelect(this.sidebar.Buttons[i]);
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

      console.log(this.sidebar);
      
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
