import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {DesktopMenuComponent} from "./features/desktop-view/desktop-menu/desktop-menu.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DesktopMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'game-box';
}
