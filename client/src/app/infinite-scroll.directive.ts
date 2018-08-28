import { Directive, AfterViewInit, ElementRef, Input } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import { debounceTime, map, filter, startWith } from 'rxjs/operators';

@Directive({
  selector: '[appInfiniteScroll]'
})
export class InfiniteScrollDirective implements AfterViewInit {
  @Input()
  scrollPercentage: number;
  @Input()
  scrollCallback;
  private scrollEvent$: Observable<Event>;
  constructor(private element: ElementRef) {}

  ngAfterViewInit() {
    this.scrollEvent$ = fromEvent(this.element.nativeElement, 'scroll');
    this.scrollEvent$
      .pipe(
        map(event => event.target),
        startWith(this.element),
        debounceTime(50),
        map(this.calculateScrollPercentage),
        filter(percentage => percentage >= this.scrollPercentage)
      )
      .subscribe(this.scrollCallback);
  }

  calculateScrollPercentage(element) {
    return (
      ((element.scrollTop + element.clientHeight) / element.scrollHeight) * 100
    );
  }
}
