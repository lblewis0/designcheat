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
    Button10Component
  ],
  imports: [
    CommonModule,
    DesigncheatsRoutingModule,
    NavbarsModule,
    SidebarsModule
  ]
})
export class DesigncheatsModule { }
