import { Component } from '@angular/core';
import {RouterLink, RouterOutlet, Routes} from "@angular/router";
import {DesktopAuthRoutes} from "./desktop-auth.routes";

@Component({
  selector: 'desktop-auth',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './desktop-auth.component.html',
  styleUrl: './desktop-auth.component.scss'
})
export class DesktopAuthComponent {
}
