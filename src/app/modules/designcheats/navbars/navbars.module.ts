import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Navbar1Component } from './navbar1/navbar1.component';
import { NavbarsComponent } from './navbars.component';
import { Navbar2Component } from './navbar2/navbar2.component';


@NgModule({
  declarations: [
    NavbarsComponent,
    Navbar1Component,
    Navbar2Component
  ],
  imports: [
    CommonModule
  ]
})
export class NavbarsModule { }
