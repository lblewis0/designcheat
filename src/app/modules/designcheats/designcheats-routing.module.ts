import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarsComponent } from './navbars/navbars.component';

const routes: Routes = [
  {path: 'navbars', component: NavbarsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesigncheatsRoutingModule { }
