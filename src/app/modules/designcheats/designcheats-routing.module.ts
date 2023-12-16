import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarsComponent } from './navbars/navbars.component';
import { SidebarsComponent } from './sidebars/sidebars.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { BackgroundsComponent } from './backgrounds/backgrounds.component';
import { ButtonGroupComponent } from './button-group/button-group.component';
import { CodeInputComponent } from './code-input/code-input.component';
import { InputsComponent } from './inputs/inputs.component';
import { TablesComponent } from './tables/tables.component';
import { PaginationComponent } from './pagination/pagination.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { AccordionsComponent } from './accordions/accordions.component';
import { AlertsComponent } from './alerts/alerts.component';
import { BadgesComponent } from './badges/badges.component';
import { DropdownsComponent } from './dropdowns/dropdowns.component';
import { ProgressesComponent } from './progresses/progresses.component';
import { SpinnersComponent } from './spinners/spinners.component';
import { TabulationsComponent } from './tabulations/tabulations.component';

const routes: Routes = [
  {path: "navbars", component: NavbarsComponent},
  {path: "sidebars", component: SidebarsComponent},
  {path: "buttons", component: ButtonsComponent},
  {path: "backgrounds", component: BackgroundsComponent},
  {path: "button-group", component: ButtonGroupComponent},
  {path: "code-input", component: CodeInputComponent},
  {path: "inputs", component: InputsComponent},
  {path: "tables", component: TablesComponent},
  {path: "paginations", component: PaginationComponent},
  {path: "breadcrumbs", component: BreadcrumbsComponent},
  {path: "accordions", component: AccordionsComponent},
  {path: "alerts", component: AlertsComponent},
  {path: "badges", component: BadgesComponent},
  {path: "dropdowns", component: DropdownsComponent},
  {path: "progresses", component: ProgressesComponent},
  {path: "spinners", component: SpinnersComponent},
  {path: "tabulations", component: TabulationsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesigncheatsRoutingModule { }
