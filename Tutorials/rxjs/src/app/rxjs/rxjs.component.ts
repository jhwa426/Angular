import { Component } from '@angular/core';
import {
  of,
  map,
  pipe,
  fromEvent,
  interval,
  concatMap,
  take,
  switchMap,
  combineLatestAll,
  timer,
  startWith,
  debounceTime,
  distinctUntilChanged,
  catchError,
  concat,
  throwError,
} from 'rxjs';

@Component({
  selector: 'app-rxjs',
  imports: [],
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss'],
})
export class RxjsComponent {
  result: number;
  text: string;

  constructor() {
    this.result = 0;
    this.text = '';
  }

  rxjsFunction(x: number) {
    // Example of using of() and map
    of(x)
      .pipe(map((x) => 10 * x))
      .subscribe((result) => console.log(`Result: ${result}`));

    // This is the original example provided
    of(1, 2, 3)
      .pipe(map((x) => x * x))
      .subscribe((v) => console.log(`value: ${v}`));

    // Example of using concatMap
    const clicks = fromEvent(document, 'click');
    const result = clicks.pipe(concatMap((ev) => interval(1000).pipe(take(4))));
    result.subscribe((x) => console.log(x));

    // Example of using switchMap
    const switched = of(1, 2, 3).pipe(switchMap((x) => of(x, x ** 2, x ** 3)));
    switched.subscribe((x) => console.log(x));

    // Example of Combine all operators
    const clickEvent = fromEvent(document, 'click');
    const higherOrder = clickEvent.pipe(
      map(() => interval(Math.random() * 2000).pipe(take(3))),
      take(2)
    );
    const resultOrder = higherOrder.pipe(combineLatestAll());

    resultOrder.subscribe((x) => console.log(x));

    // StartWith operator
    timer(1000)
      .pipe(
        map(() => 'timer emit'),
        startWith('timer start')
      )
      .subscribe((x) => console.log(x));

    // DebounceTime
    const clicksDebounce = fromEvent(document, 'click');
    const resultDebounce = clicksDebounce.pipe(debounceTime(1000));
    resultDebounce.subscribe((x) => console.log(x));

    //distinctUntilChanged
    const totallyDifferentBuilds$ = of(
      { engineVersion: '1.1.0', transmissionVersion: '1.2.0' },
      { engineVersion: '1.1.0', transmissionVersion: '1.4.0' },
      { engineVersion: '1.3.0', transmissionVersion: '1.4.0' },
      { engineVersion: '1.3.0', transmissionVersion: '1.5.0' },
      { engineVersion: '2.0.0', transmissionVersion: '1.5.0' }
    ).pipe(
      distinctUntilChanged((prev, curr) => {
        return (
          prev.engineVersion === curr.engineVersion ||
          prev.transmissionVersion === curr.transmissionVersion
        );
      })
    );

    totallyDifferentBuilds$.subscribe(console.log);

    // catchError
    of(1, 2, 3, 4, 5)
      .pipe(
        map((n) => {
          if (n === 4) {
            throw 'four!';
          }
          return n;
        }),
        catchError((err) => of('I', 'II', 'III', 'IV', 'V'))
      )
      .subscribe((x) => console.log(x));

    // Alternative way
    catchError((err) => concat(of(null), throwError(err)));

    return x;
  }

  rxjsOperator(num: number) {
    // Example of using of() and map
    of(num)
      .pipe(map((num) => 10 * num))
      .subscribe((num) => {
        console.log(`Result: ${num}`);
        this.result = num;
      });
  }
}
