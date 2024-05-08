import { Routes } from '@angular/router';

export const routes: Routes = [

    {path: '', title: 'Home', loadComponent: () => import('./components/home/home.component').then(c => c.HomeComponent)},
    {path: 'promo', title: 'Promoções', loadComponent: () => import('./components/promo-home/promo-home.component').then(c => c.PromoHomeComponent)},
    {path: 'local', title: 'Localização', loadComponent: () => import('./components/localizacao/localizacao.component').then(c => c.LocalizacaoComponent)},
    {path: 'comopedir', title: 'Como Pedir?', loadComponent: () => import('./components/como-pedir/como-pedir.component').then(c => c.ComoPedirComponent)},
    {path: 'sobre', title: 'Sobre nós', loadComponent: () => import('./components/sobre/sobre.component').then(c => c.SobreComponent)},

];
