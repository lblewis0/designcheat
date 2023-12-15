import { Component } from '@angular/core';
import { navbarModel } from 'src/app/shared/models/navbarModels';
import { liElement, sidebarUlModel } from 'src/app/shared/models/sidebarModels';
import { sidebarButtonsModel } from 'src/app/shared/models/sidebarModels';

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
         route: '/accordions', 
         isSelected: false,
         isExpanding: false,
         isContracting: false},
         {value: 'Alerts',
         route: '/alerts', 
         isSelected: false,
         isExpanding: false,
         isContracting: false},
         {value: 'Badges',
         route: '/badges',
         isSelected: false,
         isExpanding: false,
         isContracting: false},
         {value: 'Breadcrumb',
         route: '/breadcrumbs', 
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
         {value: 'Code input',
         route: '/code-input' ,
         isSelected: false,
         isExpanding: false,
         isContracting: false},
         {value: 'Dropdowns',
         route: '/dropdowns', 
         isSelected: false,
         isExpanding: false,
         isContracting: false},
         {value: 'Inputs',
         route: '/inputs',
         isSelected: false,
         isExpanding: false,
         isContracting: false},
         {value: 'Modal', 
         isSelected: false,
         isExpanding: false,
         isContracting: false},
         {value: 'Notifications', 
         isSelected: false,
         isExpanding: false,
         isContracting: false},
         {value: 'Pagination',
         route: '/paginations',
         isSelected: false,
         isExpanding: false,
         isContracting: false},
         {value: 'Progress',
         route: '/progresses',
         isSelected: false,
         isExpanding: false,
         isContracting: false},
         {value: 'Scrollspy', 
         isSelected: false,
         isExpanding: false,
         isContracting: false},
         {value: 'Spinners', 
         route: '/spinners',
         isSelected: false,
         isExpanding: false,
         isContracting: false},
         {value: 'Tables',
         route: '/tables', 
         isSelected: false,
         isExpanding: false,
         isContracting: false},
         {value: 'Tabulation', 
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

  sidebarButtons: sidebarButtonsModel = {
   Buttons: [
     {value: "Account",
      iconPath: "M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z",
      isSelected: false},
     {value: "Settings",
      iconPath: "m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z",
      isSelected: false}
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
            // console.log(this.sidebar.Buttons[i].value);
            
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
      
  }
    
  unSelect(button: liElement) : void
  {
      if(button.childs && button.childs.length > 0)
      {
         for(let i = 0; i < button.childs.length; i++)
         {
            // console.log(button.childs[i].value);

            button.childs[i].isSelected = false;

            this.unSelect(button.childs[i]);
         }
      }
  }

}
