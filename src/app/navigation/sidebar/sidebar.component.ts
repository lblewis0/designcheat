import { Component } from '@angular/core';
import { navbarModel } from 'src/app/shared/models/navbarModels';
import { sidebarModel } from 'src/app/shared/models/sidebarModels';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  sidebar: sidebarModel = {
    Buttons: [
      {value: 'Navigation', 
       isSelected: true,
       isExpanded: true, 
       iconPath: "M160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z", 
       childs: [
        {value: 'NavigationChild1', 
         isSelected: false,
         isExpanded: false,  
         childs: [
          {value: 'NavigationGrandChild1', 
           isSelected: false},
        ]},
        {value: 'NavigationChild2', 
         isSelected: false}
      ]},
      {value: 'Grid', 
       isSelected: false,
       isExpanded: false,
       iconPath: "M160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z", 
       childs: [
        {value: 'GridChild1', 
         isSelected: false},
        {value: 'GridChild2', 
         isSelected: false}
      ]},
    ]
  }

  onClickSideBarButton() : void
  {
    
  }
}
