import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarsComponent } from './navbars/navbars.component';
import { SidebarsComponent } from './sidebars/sidebars.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { BackgroundsComponent } from './backgrounds/backgrounds.component';

const routes: Routes = [
  {path: "navbars", component: NavbarsComponent},
  {path: "sidebars", component: SidebarsComponent},
  {path: "buttons", component: ButtonsComponent},
  {path: "backgrounds", component: BackgroundsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesigncheatsRoutingModule { }
