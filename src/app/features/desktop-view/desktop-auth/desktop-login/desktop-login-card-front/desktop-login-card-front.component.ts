import {AfterViewInit, Component, OnDestroy} from '@angular/core';
import {MatCard, MatCardContent} from "@angular/material/card";
import {textGlowAnimation} from "../../../../../shared/animations/text-glow.animation";

@Component({
  selector: 'desktop-login-card-front',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent
  ],
  templateUrl: './desktop-login-card-front.component.html',
  styleUrl: './desktop-login-card-front.component.scss',
  animations: [
    textGlowAnimation(),
  ],
})
export class DesktopLoginCardFrontComponent implements AfterViewInit, OnDestroy {
  glowState: "start" | "end" = "start";
  interval: any;

  ngAfterViewInit(): void {
    this.startTextGlowAnimation();
  }

  ngOnDestroy(): void {
    this.endTextGlowAnimation();
  }

  private startTextGlowAnimation(): void {
    this.interval = setInterval(() => {
      this.glowState = this.glowState === "start" ? "end" : "start";
    }, 300);
  }

  private endTextGlowAnimation(): void {
    if (this.interval) clearInterval(this.interval);
  }
}
