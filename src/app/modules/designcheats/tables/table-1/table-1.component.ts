import { Component } from '@angular/core';
import { Contact } from 'src/app/shared/models/interfaces/contacts';

@Component({
  selector: 'app-table-1',
  templateUrl: './table-1.component.html',
  styleUrl: './table-1.component.scss'
})
export class Table1Component {

  contacts: Contact[] = [
    {
      firstname: "Louis",
      lastname: "Boeckmans",
      phoneNumber: 495724810,
      mail: "louis.boeckmans@outlook.com",
      street: "Quai de Gaulle",
      streetNumber: 17,
      postalCode: 4020,
      locality: "Liège"
    },
    {
      firstname: "Carole",
      lastname: "Maziers",
      phoneNumber: 498735522,
      mail: "carole.maziers@outlook.com",
      street: "Bassinne",
      streetNumber: 6,
      postalCode: 5372,
      locality: "Méan"
    },
    {
      firstname: "Paolo",
      lastname: "Bari",
      phoneNumber: 497060708,
      mail: "paolo.bari@outlook.com",
      street: "Boulevard Hector Denis",
      streetNumber: 24,
      postalCode: 4000,
      locality: "Liège"
    }

  ]

}
