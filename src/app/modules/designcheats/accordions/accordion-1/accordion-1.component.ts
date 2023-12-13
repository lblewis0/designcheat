import { Component } from '@angular/core';
import { AccordionsModel } from 'src/app/shared/models/interfaces/accordionModel';

@Component({
  selector: 'app-accordion-1',
  templateUrl: './accordion-1.component.html',
  styleUrl: './accordion-1.component.scss'
})
export class Accordion1Component {

  accordions: AccordionsModel = {
    Accordions: [
      {
        value: 'Accordion 1',
        isSelected: false,
        isExpanding: false,
        isContracting: false,
        isExpanded: true
      },
      {
        value: 'Accordion 2',
        isSelected: false,
        isExpanding: false,
        isContracting: false,
        isExpanded: false
      },
      {
        value: 'Accordion 3',
        isSelected: false,
        isExpanding: false,
        isContracting: false,
        isExpanded: false
      },
    ]
  }

  onHeaderClick(index: number) : void
  {
      //Ensuite je regarde à tous les autres li présent dans la sidebar
      //Et je change leur valeur en false
      if(this.accordions.Accordions && this.accordions.Accordions.length > 0)
      {
         for(let i = 0; i < this.accordions.Accordions.length;i++)
         {
            // console.log(this.sidebar.Buttons[i].value);
            
            this.accordions.Accordions[i].isSelected = false;
          
         }
      }

      //Je reçois en argument un liElement
      //Quoiqu'il arrive j'inverse sa valeur isSelected au click
      this.accordions.Accordions[index].isSelected = true;

      if(this.accordions.Accordions[index].isExpanded)
      {
        this.accordions.Accordions[index].isExpanded = false;
        this.accordions.Accordions[index].isContracting = true;
        setTimeout(() => {
          this.accordions.Accordions[index].isContracting = false;
        }, 1000)

      }
      else
      {
        this.accordions.Accordions[index].isExpanded = true;
        this.accordions.Accordions[index].isExpanding = true;
        setTimeout(() => {
          this.accordions.Accordions[index].isExpanding = false;
        }, 1000)
      }
      
  }

  getAccordionContentClass(index: number) : void
  {

  }

  getAccordionHeaderClass(index: number) : void
  {

  }

  getExpanderClass(index: number) : void
  {
    
  }

}
