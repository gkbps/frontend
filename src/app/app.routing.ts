import { AuthGuard, TCodeGuard } from './nga/services';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import {
  FullLayout,
  SimpleLayout
} from './containers';

export const routes: Routes = [
  {
    path: '',
    component: SimpleLayout,
    data: {
      title: 'Public'
    },
    children: [
      {
        path: '',
        redirectTo: 'intro', // mainpage
        pathMatch: 'full',
      },
      {
        path: 'intro',
        loadChildren: './views/_base/intro/intro.module#IntroModule',
      },
      {
        path: 'login',
        loadChildren: './views/_base/login/login.module#LoginModule',
      },
      {
        path: 'register',
        loadChildren: './views/_base/register/register.module#RegisterModule',
      },
      {
        path: 'forgot',
        loadChildren: './views/_base/forgot/forgot.module#ForgotModule',
      },
      {
        path: '404',
        loadChildren: './views/_base/404/404.module#P404Module',
      },
      {
        path: '500',
        loadChildren: './views/_base/500/500.module#P500Module',
      },
    ]
  },
  {
    path: 'coreui',
    component: FullLayout,
    canActivateChild: [AuthGuard],
    data: {
      title: 'Core UI'
    },
    children: [
      {
        path: '',
        loadChildren: './views/_coreUI/coreUI.module#CoreUIModule'
      },
    ]
  },
  {
    path: 'prime',
    component: SimpleLayout,
    canActivateChild: [AuthGuard],
    data: {
      title: 'PrimeNg'
    },
    children: [
      {
        path: '',
        loadChildren: './views/_primeNg/prime.module#PrimeModule'
      },
    ]
  },
  {
    path: 'home',
    component: FullLayout,
    canActivateChild: [AuthGuard],
    data: {
      title: 'Home'
    },
    children: [
      {
        path: '',
        loadChildren: './views/_core/home.module#HomeModule'
      },
    ]
  },
  {
    path: 'system',
    component: SimpleLayout,
    canActivateChild: [AuthGuard],
    data: {
      title: 'System'
    },
    children: [
      {
        path: 'prime',
        loadChildren: './views/_primeNg/prime.module#PrimeModule'
      },
    ]
  },
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
