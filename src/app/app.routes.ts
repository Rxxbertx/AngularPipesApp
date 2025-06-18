import {Routes} from '@angular/router';

export const routes: Routes = [

  {
    path: 'basic',
    title: 'Basic Pipes',
    loadComponent: () => import('./pipes/pages/basic-page/basic-page')
  },
  {
    path: 'numbers',
    title: 'Numbers Pipes',
    loadComponent: () => import('./pipes/pages/numbers-page/numbers-page')
  },
  {
    path: 'uncommon',
    title: 'Uncommon Pipes',
    loadComponent: () => import('./pipes/pages/uncommon-page/uncommon-page')
  },
  {
    path: 'custom',
    title: 'Custom Pipes',
    loadComponent: () => import('./pipes/pages/custom-page/custom-page')
  },


];
