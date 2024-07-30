import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'desktop-games',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './desktop-games.component.html',
  styleUrl: './desktop-games.component.scss'
})
export class DesktopGamesComponent {

}
