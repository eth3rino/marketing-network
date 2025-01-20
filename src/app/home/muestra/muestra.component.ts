import { Component } from '@angular/core';
import { IsVisibleDirective } from '../../directives/is-visible.directive';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-muestra',
  imports: [IsVisibleDirective, RouterModule],
  templateUrl: './muestra.component.html',
  styleUrl: './muestra.component.css'
})
export class MuestraComponent {
  constructor() {

  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth' // Enables smooth scrolling
    });
  }

}
