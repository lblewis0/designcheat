import { Component, OnDestroy, OnInit } from '@angular/core';
import { CountdownService } from 'src/app/shared/services/countdown.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-progress-2',
  templateUrl: './progress-2.component.html',
  styleUrl: './progress-2.component.scss'
})
export class Progress2Component {

  progressValue: number = 40;
  widthValue: string = `${this.progressValue}%`;
  private ngUnsubscribe = new Subject();

  constructor(private countDownService: CountdownService){}

  // ngOnInit() {
  //   this.startCountdown();
  // }

  // ngOnDestroy() {
  //   this.ngUnsubscribe.next();
  //   this.ngUnsubscribe.complete();
  // }

  // startCountdown() {
  //   const durationInSeconds = 5;
  //   this.countDownService.startCountDown(durationInSeconds)
  //                        .pipe(takeUntil(this.ngUnsubscribe))
  //                        .subscribe((progress) => { this.progressValue = progress;})
  // }

  // start() : void
  // {
  //   for(let i = 0; i < 100; i++)
  //   {
  //     setTimeout(() => {
  //       this.progressValue = i + 1;
  //     }, 5000)
  //   }

  //   this.progressValue = 100;
  // }

}
