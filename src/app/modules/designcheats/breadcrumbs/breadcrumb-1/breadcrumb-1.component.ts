import { Component } from '@angular/core';

@Component({
  selector: 'app-breadcrumb-1',
  templateUrl: './breadcrumb-1.component.html',
  styleUrl: './breadcrumb-1.component.scss'
})
export class Breadcrumb1Component {

  route: string = 'home/components/breadcrumbs/breadcrumb1';
  routeElement: string[] = this.route.split("/");

  constructor() {}

}
