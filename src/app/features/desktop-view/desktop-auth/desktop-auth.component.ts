import {Component} from '@angular/core';
import {RouterOutlet} from "@angular/router";

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

  constructor() {
  }
}
