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

  getAccordionContentClass(index: number) : string | undefined
  {
    let accordion = this.accordions.Accordions[index];
    
    if(index === this.accordions.Accordions.length - 1)
    {
      //dernier content class
      if(accordion.isExpanded && !accordion.isExpanding)
      {
        return 'accordion-content-last';
      }

      if(accordion.isExpanded && accordion.isExpanding)
      {
        return 'accordion-content-last-expanding';
      }

      if(!accordion.isExpanded && accordion.isContracting)
      {
        return 'accordion-content-last-contracting';
      }
    }
    else
    {
      if(accordion.isExpanded && !accordion.isExpanding)
      {
        return 'accordion-content';
      }

      if(accordion.isExpanded && accordion.isExpanding)
      {
        return 'accordion-content-expanding';
      }

      if(!accordion.isExpanded && accordion.isContracting)
      {
        return 'accordion-content-contracting';
      }
    }

    return undefined

  }

  getAccordionHeaderClass(index: number) : string | undefined
  {
    let accordion = this.accordions.Accordions[index];

    if(index === this.accordions.Accordions.length - 1)
    {
      if(accordion.isExpanded)
      {
        return 'accordion-last-element-header'
      }
      else
      {
        return 'accordion-last-element-header-contracted'
      }
    }
    else
    {
      if(index === 0)
      {
        //first header
        if(accordion.isExpanded)
        {
          return 'accordion-first-element-header'
        }
        else
        {
          return 'accordion-first-element-header-contracted'
        }
      }
      else
      {
        if(accordion.isExpanded)
        {
          return 'accordion-element-header'
        }
        else
        {
          return 'accordion-element-header-contracted'
        }
      }
    }

    return undefined

  }

  getExpanderClass(index: number) : string
  {
    let accordion = this.accordions.Accordions[index];

    if(accordion.isExpanded && !accordion.isExpanding)
    {
      return 'accordion-expander';
    }

    if(accordion.isExpanded && accordion.isExpanding)
    {
      return 'accordion-expander-expanding';
    }

    if(!accordion.isExpanded && accordion.isContracting)
    {
      return 'accordion-expander-contracting';
    }

    return 'accordion-expander'

    
  }

}
