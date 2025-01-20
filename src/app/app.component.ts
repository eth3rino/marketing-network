import { AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, Component, HostListener, ViewChild } from '@angular/core';
import { Router, RouterModule, RouterOutlet, RouterOutletContract } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { animate, group, query, style, transition, trigger } from '@angular/animations';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterModule, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [
    trigger('routeAnimations', [
      transition('* <=> *', [
        group([
          query(':leave', [
            style({opacity: 1, position: 'absolute', width: '100%'}),
            animate('.25s', style({opacity: 0}))
          ], {optional: true}),
          query(':enter', [
            style({opacity: 0, position: 'absolute', width: '100%'}),
            animate('.25s .35s', style({opacity: 1}))
          ], {optional: true})
        ])
      ])
    ])
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'marketing';
  
  // @ViewChild('outlet') outlet! : RouterOutlet;

  // lastAnimation: string = ''
  // prepareRoute(outlet: RouterOutlet): string | null {
  //   if (!outlet || !outlet.activatedRouteData) return null;
  
  //   const animation = outlet.activatedRouteData['animation'];
  //   // const routeUrl = outlet.activatedRoute?.snapshot?.url || [];
    
  //   console.log('PrepareRoute called, state:', animation, 'Route:', );
  
  //   return animation;
  // }
  
  prepareRouteTransition(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

}


// JUST GETTING A HANG ON WHAT MAKES ANIMATIONS WORK

// animations: [
//   trigger('routeAnimations', [
//     transition('* <=> *', [
//       group([
//         query(':leave', [
//           style({opacity: 1, position: 'absolute', width: '100%'}),
//           animate('.25s', style({opacity: 0}))
//         ], {optional: true}),
//         query(':enter', [
//           style({opacity: 0, position: 'absolute', width: '100%'}),
//           animate('.25s .35s', style({opacity: 1}))
//         ], {optional: true})
//       ])
//     ])
//   ])
// ];


// animations: [
//   trigger('routeAnimations', [
//     transition('* <=> *', [
//       group([
//         query(':leave', [
//           style({opacity: 1, position: 'absolute', width: '100%'}),
//           animate('.3s', style({opacity: 0}))
//         ], {optional: true}),
//         query(':enter', [
//           style({opacity: 0, position: 'absolute', width: '100%'}),
//           animate('.3s .4s', style({opacity: 1}))
//         ], {optional: true})
//       ])
//     ])
//   ]),
// ],