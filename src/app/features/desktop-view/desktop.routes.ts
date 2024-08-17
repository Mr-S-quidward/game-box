import {Routes} from "@angular/router";
import {DesktopMenuRoutes} from "./desktop-menu/desktop-menu.routes";
import {DesktopAuthRoutes} from "./desktop-auth/desktop-auth.routes";
import {AuthGuard} from "../../core/guards/auth.guard";

export const desktopRoutes: Routes = [
  {
    path: 'auth',
    loadComponent: () => import('../desktop-view/desktop-auth/desktop-auth.component').then(c => c.DesktopAuthComponent),
    children: DesktopAuthRoutes,
  },
  {
    path: 'menu',
    canActivate: [AuthGuard],
    loadComponent: () => import('./desktop-menu/desktop-menu.component').then(c => c.DesktopMenuComponent),
    children: DesktopMenuRoutes,
  },
  {path: '', redirectTo: '/auth', pathMatch: 'full'},
  {path: '**', redirectTo: '/auth'},
]
