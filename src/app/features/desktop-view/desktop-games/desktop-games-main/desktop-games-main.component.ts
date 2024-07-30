import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {DesktopGamesRoutes} from "../desktop-games.routes";

@Component({
  selector: 'desktop-games-main',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './desktop-games-main.component.html',
  styleUrl: './desktop-games-main.component.scss'
})
export class DesktopGamesMainComponent {
  protected readonly gameMenu = DesktopGamesRoutes.filter(v => v.path!.length > 0);
}
