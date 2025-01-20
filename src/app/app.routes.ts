import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TrabajosComponent } from './trabajos/trabajos.component';
import { animate, animation } from '@angular/animations';

export const routes: Routes = [
    {path: '', pathMatch: 'full', component: HomeComponent, data: {animation: 'home'}},
    {path: 'trabajos', component: TrabajosComponent, data: {animation: 'trabajos'}},
];
