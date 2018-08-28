import {
  Directive,
  Output,
  EventEmitter,
  ElementRef,
  AfterViewInit
} from '@angular/core';

@Directive({
  selector: '[appDeferLoad]'
})
export class DeferLoadDirective implements AfterViewInit {
  @Output()
  appDeferLoad: EventEmitter<any> = new EventEmitter();
  private intersectionObserver: IntersectionObserver;

  constructor(private element: ElementRef) {}

  ngAfterViewInit() {
    this.intersectionObserver = new IntersectionObserver(
      entries => {
        this.checkForIntersection(entries);
      },
      { rootMargin: '0px 0px 100% 0px' }
    );
    this.intersectionObserver.observe(<Element>this.element.nativeElement);
  }

  checkForIntersection(entries: IntersectionObserverEntry[]) {
    entries.forEach((entry: IntersectionObserverEntry) => {
      if (this.checkIfIntersecting(entry)) {
        this.appDeferLoad.emit();
        this.intersectionObserver.unobserve(<Element>(
          this.element.nativeElement
        ));
        // Stop watching all target elements
        this.intersectionObserver.disconnect();
      }
    });
  }

  checkIfIntersecting(entry: IntersectionObserverEntry) {
    // isIntersecting is `true` when entry is *entering* the frame
    // `false` when leaving
    return entry.isIntersecting && entry.target === this.element.nativeElement;
  }
}
