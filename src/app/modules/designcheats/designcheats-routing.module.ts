import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarsComponent } from './navbars/navbars.component';
import { SidebarsComponent } from './sidebars/sidebars.component';

const routes: Routes = [
  {path: "navbars", component: NavbarsComponent},
  {path: "sidebars", component: SidebarsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesigncheatsRoutingModule { }
