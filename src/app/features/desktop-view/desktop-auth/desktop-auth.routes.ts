import {Routes} from "@angular/router";

export let DesktopAuthRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('../../desktop-view/desktop-auth/desktop-auth-main/desktop-auth-main.component').then(c => c.DesktopAuthMainComponent),
  },
  {
    path: 'login',
    loadComponent: () => import('../../desktop-view/desktop-auth/desktop-login/desktop-login.component').then(c => c.DesktopLoginComponent),
  },
  {
    path: 'sign-up',
    loadComponent: () => import('../../desktop-view/desktop-auth/desktop-sign-up/desktop-sign-up.component').then(c => c.DesktopSignUpComponent),
  },
];
