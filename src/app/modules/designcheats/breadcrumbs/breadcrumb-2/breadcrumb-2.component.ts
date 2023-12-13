import { Component } from '@angular/core';

@Component({
  selector: 'app-breadcrumb-2',
  templateUrl: './breadcrumb-2.component.html',
  styleUrl: './breadcrumb-2.component.scss'
})
export class Breadcrumb2Component {

  route: string = 'home/components/breadcrumbs/breadcrumb1';
  routeElement: string[] = this.route.split("/");

  constructor() {}

}
