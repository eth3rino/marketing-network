import { AfterViewInit, Directive, ElementRef, OnDestroy } from '@angular/core';
import PerfectScrollbar from 'perfect-scrollbar';

@Directive({
  selector: '[appPerfectScrollbar]'
})
export class PerfectScrollbarDirective implements AfterViewInit, OnDestroy {
  private ps?: any; // Use `any` as a workaround for typing issues

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    if (typeof PerfectScrollbar === 'function') {
      this.ps = new (PerfectScrollbar as any)(this.el.nativeElement);
    }
  }

  ngOnDestroy(): void {
    this.ps?.destroy();
  }
}
