import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesigncheatsRoutingModule } from './designcheats-routing.module';
import { NavbarsComponent } from './navbars/navbars.component';


@NgModule({
  declarations: [
    NavbarsComponent
  ],
  imports: [
    CommonModule,
    DesigncheatsRoutingModule
  ]
})
export class DesigncheatsModule { }
