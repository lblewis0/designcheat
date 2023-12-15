import { Injectable } from '@angular/core';
import { Observable, timer, Subject } from 'rxjs';
import { map, takeWhile } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountdownService {
  private progressSubject = new Subject<number>();

  startCountDown(durationInSeconds: number) : Observable<number> {
    return timer(0, 50).pipe(
      map((elapsedTime: any) => (elapsedTime / (durationInSeconds * 1000)) * 100),
      takeWhile((progress: any) => progress <= 100)
    );
  }

  constructor() { }
}
