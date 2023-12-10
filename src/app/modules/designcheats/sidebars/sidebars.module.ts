import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarsComponent } from './sidebars.component';
import { Sidebar1Component } from './sidebar1/sidebar1.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { Sidebar3Component } from './sidebar3/sidebar3.component';
import { Sidebar4Component } from './sidebar4/sidebar4.component';



@NgModule({
  declarations: [
    SidebarsComponent,
    Sidebar1Component,
    Sidebar3Component,
    Sidebar4Component
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
  ]
})
export class SidebarsModule { }
