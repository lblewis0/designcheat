import { Component } from '@angular/core';

@Component({
  selector: 'app-pagination-3',
  templateUrl: './pagination-3.component.html',
  styleUrl: './pagination-3.component.scss'
})
export class Pagination3Component {

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
