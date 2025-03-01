import { Directive, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appIsVisible]'
})
export class IsVisibleDirective implements OnInit {

  // Recieves the threshold information from the element via [treshold]='x'
  @Input() threshold: number = 0.1;

  // Use ElementRef as reference for element using this directive
  // Use Renderer2 to modify the ElementRef's native element
  constructor(private element: ElementRef, private renderer: Renderer2) { }


  ngOnInit(): void {
    // IntersectionObserver observes the element for it's intersection with the selected element, for us, the screen
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach( entry => {
          // isIntersectinc is self-explanatory. We can use this method since we are inside the
          // IntersectionObserver's callback function, otherwise we wouldn't be able
          if (entry.isIntersecting) {
            // Add class if element on screen
            this.renderer.addClass(this.element.nativeElement, 'visible')
          } else {
            // remove class otherwise
            this.renderer.removeClass(this.element.nativeElement, 'visible')
          }
        })
      },
      // Options, like at which percentage of the element it's true or false (threshold),
      // or which element it has to intersect
      { threshold: this.threshold}
    );
    // call the observer on the element
    observer.observe(this.element.nativeElement)
  }
}

