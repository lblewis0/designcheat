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
import { Table3Component } from './tables/table-3/table-3.component';
import { PaginationComponent } from './pagination/pagination.component';
import { Pagination1Component } from './pagination/pagination-1/pagination-1.component';


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
    Table3Component,
    PaginationComponent,
    Pagination1Component
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
