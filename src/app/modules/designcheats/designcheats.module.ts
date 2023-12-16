import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesigncheatsRoutingModule } from './designcheats-routing.module';
import { NavbarsModule } from './navbars/navbars.module';
import { SidebarsModule } from './sidebars/sidebars.module';
import { ButtonsComponent } from './buttons/buttons.component';
import { BackgroundsComponent } from './backgrounds/backgrounds.component';
import { Button1Component } from './buttons/button/button-1/button-1.component';
import { Button2Component } from './buttons/button/button-2/button-2.component';
import { Button3Component } from './buttons/button/button-3/button-3.component';
import { Button4Component } from './buttons/button/button-4/button-4.component';
import { Button5Component } from './buttons/button/button-5/button-5.component';
import { Button6Component } from './buttons/button/button-6/button-6.component';
import { Button7Component } from './buttons/button/button-7/button-7.component';
import { Button8Component } from './buttons/button/button-8/button-8.component';
import { Button9Component } from './buttons/button/button-9/button-9.component';
import { Button10Component } from './buttons/button/button-10/button-10.component';
import { ButtonIcon1Component } from './buttons/button-icon/button-icon-1/button-icon-1.component';
import { ButtonNotification1Component } from './buttons/button-notification/button-notification-1/button-notification-1.component';
import { ButtonSpan1Component } from './buttons/button-span/button-span-1/button-span-1.component';
import { ButtonNotification2Component } from './buttons/button-notification/button-notification-2/button-notification-2.component';
import { ButtonGroupComponent } from './button-group/button-group.component';
import { ButtonGroup1Component } from './button-group/button-group-1/button-group-1.component';
import { CodeInputComponent } from './code-input/code-input.component';
import { CodeInput1Component } from './code-input/code-input-1/code-input-1.component';
import { FormsModule } from '@angular/forms';
import { CodeInput2Component } from './code-input/code-input-2/code-input-2.component';
import { MonacoEditorModule } from 'ngx-monaco-editor-v2';
import { SharedModule } from 'src/app/shared/shared.module';
import { Input1Component } from './inputs/input-1/input-1.component';
import { InputsComponent } from './inputs/inputs.component';
import { Input2Component } from './inputs/input-2/input-2.component';
import { Input3Component } from './inputs/input-3/input-3.component';
import { Input4Component } from './inputs/input-4/input-4.component';
import { Input5Component } from './inputs/input-5/input-5.component';
import { Input6Component } from './inputs/input-6/input-6.component';
import { Input7Component } from './inputs/input-7/input-7.component';
import { Input8Component } from './inputs/input-8/input-8.component';
import { Input9Component } from './inputs/input-9/input-9.component';
import { TablesComponent } from './tables/tables.component';
import { Table2Component } from './tables/table-2/table-2.component';
import { PaginationComponent } from './pagination/pagination.component';
import { Pagination1Component } from './pagination/pagination-1/pagination-1.component';
import { Pagination2Component } from './pagination/pagination-2/pagination-2.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { Breadcrumb1Component } from './breadcrumbs/breadcrumb-1/breadcrumb-1.component';
import { Breadcrumb2Component } from './breadcrumbs/breadcrumb-2/breadcrumb-2.component';
import { AccordionsComponent } from './accordions/accordions.component';
import { Accordion1Component } from './accordions/accordion-1/accordion-1.component';
import { AlertsComponent } from './alerts/alerts.component';
import { Alert1Component } from './alerts/alert-1/alert-1.component';
import { Alert2Component } from './alerts/alert-2/alert-2.component';
import { Alert3Component } from './alerts/alert-3/alert-3.component';
import { Alert4Component } from './alerts/alert-4/alert-4.component';
import { AlertLink1Component } from './alerts/alert-link-1/alert-link-1.component';
import { AlertLink2Component } from './alerts/alert-link-2/alert-link-2.component';
import { AlertLink3Component } from './alerts/alert-link-3/alert-link-3.component';
import { AlertLink4Component } from './alerts/alert-link-4/alert-link-4.component';
import { AlertIcon1Component } from './alerts/alert-icon-1/alert-icon-1.component';
import { AlertIcon2Component } from './alerts/alert-icon-2/alert-icon-2.component';
import { AlertIcon3Component } from './alerts/alert-icon-3/alert-icon-3.component';
import { AlertIcon4Component } from './alerts/alert-icon-4/alert-icon-4.component';
import { ButtonClose1Component } from './buttons/button-close/button-close-1/button-close-1.component';
import { IconButton1Component } from './buttons/icons/icon-button-1/icon-button-1.component';
import { BadgesComponent } from './badges/badges.component';
import { Badge1Component } from './badges/badge-1/badge-1.component';
import { Badge2Component } from './badges/badge-2/badge-2.component';
import { Badge3Component } from './badges/badge-3/badge-3.component';
import { Badge4Component } from './badges/badge-4/badge-4.component';
import { ButtonDropdown1Component } from './buttons/button-dropdown/button-dropdown-1/button-dropdown-1.component';
import { DropdownsComponent } from './dropdowns/dropdowns.component';
import { DropdownRight1Component } from './dropdowns/dropdown-right-1/dropdown-right-1.component';
import { DropdownDown1Component } from './dropdowns/dropdown-down-1/dropdown-down-1.component';
import { DropdownRight2Component } from './dropdowns/dropdown-right-2/dropdown-right-2.component';
import { DropdownDown2Component } from './dropdowns/dropdown-down-2/dropdown-down-2.component';
import { Pagination3Component } from './pagination/pagination-3/pagination-3.component';
import { ProgressesComponent } from './progresses/progresses.component';
import { Progress1Component } from './progresses/progress-1/progress-1.component';
import { Progress2Component } from './progresses/progress-2/progress-2.component';
import { SpinnersComponent } from './spinners/spinners.component';
import { Spiner1Component } from './spinners/spiner-1/spiner-1.component';
import { Spiner2Component } from './spinners/spiner-2/spiner-2.component';
import { ToggleButton1Component } from './buttons/toggle-button/toggle-button-1/toggle-button-1.component';
import { Spiner3Component } from './spinners/spiner-3/spiner-3.component';
import { TabulationsComponent } from './tabulations/tabulations.component';
import { Tabulation1Component } from './tabulations/tabulation-1/tabulation-1.component';
import { Tabulation2Component } from './tabulations/tabulation-2/tabulation-2.component';
import { Tabulation3Component } from './tabulations/tabulation-3/tabulation-3.component';
import { Tabulation4Component } from './tabulations/tabulation-4/tabulation-4.component';


@NgModule({
  declarations: [
    ButtonsComponent,
    BackgroundsComponent,
    Button1Component,
    Button2Component,
    Button3Component,
    Button4Component,
    Button5Component,
    Button6Component,
    Button7Component,
    Button8Component,
    Button9Component,
    Button10Component,
    ButtonIcon1Component,
    ButtonNotification1Component,
    ButtonSpan1Component,
    ButtonNotification2Component,
    ButtonGroupComponent,
    ButtonGroup1Component,
    CodeInputComponent,
    CodeInput1Component,
    CodeInput2Component,
    InputsComponent,
    Input1Component,
    Input2Component,
    Input3Component,
    Input4Component,
    Input5Component,
    Input6Component,
    Input7Component,
    Input8Component,
    Input9Component,
    TablesComponent,
    Table2Component,
    PaginationComponent,
    Pagination1Component,
    Pagination2Component,
    BreadcrumbsComponent,
    Breadcrumb1Component,
    Breadcrumb2Component,
    AccordionsComponent,
    Accordion1Component,
    AlertsComponent,
    Alert1Component,
    Alert2Component,
    Alert3Component,
    Alert4Component,
    AlertLink1Component,
    AlertLink2Component,
    AlertLink3Component,
    AlertLink4Component,
    AlertIcon1Component,
    AlertIcon2Component,
    AlertIcon3Component,
    AlertIcon4Component,
    ButtonClose1Component,
    IconButton1Component,
    BadgesComponent,
    Badge1Component,
    Badge2Component,
    Badge3Component,
    Badge4Component,
    ButtonDropdown1Component,
    DropdownsComponent,
    DropdownRight1Component,
    DropdownDown1Component,
    DropdownRight2Component,
    DropdownDown2Component,
    Pagination3Component,
    ProgressesComponent,
    Progress1Component,
    Progress2Component,
    SpinnersComponent,
    Spiner1Component,
    Spiner2Component,
    ToggleButton1Component,
    Spiner3Component,
    TabulationsComponent,
    Tabulation1Component,
    Tabulation2Component,
    Tabulation3Component,
    Tabulation4Component
  ],
  imports: [
    CommonModule,
    FormsModule,
    DesigncheatsRoutingModule,
    NavbarsModule,
    SidebarsModule,
    MonacoEditorModule
  ]
})
export class DesigncheatsModule { }
