import { Component } from '@angular/core';
import {DesktopMenuRoutes} from "../desktop-menu.routes";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'desktop-menu-main',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './desktop-menu-main.component.html',
  styleUrl: './desktop-menu-main.component.scss'
})
export class DesktopMenuMainComponent {

    protected readonly appMenu = DesktopMenuRoutes;
}
