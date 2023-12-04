import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesigncheatsRoutingModule } from './designcheats-routing.module';
import { NavbarsModule } from './navbars/navbars.module';
import { SidebarsModule } from './sidebars/sidebars.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    DesigncheatsRoutingModule,
    NavbarsModule,
    SidebarsModule
  ]
})
export class DesigncheatsModule { }
