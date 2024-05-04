import { Routes } from '@angular/router';

export const routes: Routes = [

    {path: '', title: 'Home', loadComponent: () => import('./components/home/home.component').then(c => c.HomeComponent)}
];
