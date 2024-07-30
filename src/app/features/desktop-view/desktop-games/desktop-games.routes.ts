import {Routes} from "@angular/router";

export const DesktopGamesRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('../../desktop-view/desktop-games/desktop-games-main/desktop-games-main.component').then(c => c.DesktopGamesMainComponent),
  },
  {
    path: 'snake',
    loadComponent: () => import('./desktop-game-snake/desktop-game-snake.component').then(c => c.DesktopGameSnakeComponent),
  },
  {
    path: 'minesweeper',
    loadComponent: () => import('./desktop-game-minesweeper/desktop-game-minesweeper.component').then(c => c.DesktopGameMinesweeperComponent),
  },
  {
    path: 'tetris',
    loadComponent: () => import('./desktop-game-tetris/desktop-game-tetris.component').then(c => c.DesktopGameTetrisComponent),
  },
]
