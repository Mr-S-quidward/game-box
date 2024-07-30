import {Routes} from "@angular/router";
import {DesktopGamesRoutes} from "../desktop-games/desktop-games.routes";

export const DesktopMenuRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('../../desktop-view/desktop-menu/desktop-menu-main/desktop-menu-main.component').then(c => c.DesktopMenuMainComponent),
  },
  {
    path: 'games',
    loadComponent: () => import('../../desktop-view/desktop-games/desktop-games.component').then(c => c.DesktopGamesComponent),
    children: DesktopGamesRoutes,
  },
  {
    path: 'setting',
    loadComponent: () => import('../desktop-games/desktop-game-snake/desktop-game-snake.component').then(c => c.DesktopGameSnakeComponent),
  },
  {
    path: 'profile',
    loadComponent: () => import('../desktop-games/desktop-game-snake/desktop-game-snake.component').then(c => c.DesktopGameSnakeComponent),
  },
]
