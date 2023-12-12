import { Component } from '@angular/core';

@Component({
  selector: 'app-pagination-1',
  templateUrl: './pagination-1.component.html',
  styleUrl: './pagination-1.component.scss'
})
export class Pagination1Component {

  paginations: number[] = [1,2,3,4,5];
  selectPage: number = 1;

  onPreviousClick() : void
  {
    if(this.selectPage > 1)
    {
      this.selectPage -= 1;
    }
  }

  onNextClick() : void
  {
    if(this.selectPage < this.paginations.length)
    {
      this.selectPage += 1;
    }
  }

  onPageClick(index: number) : void
  {
    this.selectPage = index + 1;
  }

}
