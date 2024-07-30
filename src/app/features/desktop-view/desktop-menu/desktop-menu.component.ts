import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";

@Component({
  selector: 'desktop-menu',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    RouterOutlet
  ],
  templateUrl: './desktop-menu.component.html',
  styleUrl: './desktop-menu.component.scss'
})
export class DesktopMenuComponent {
}
