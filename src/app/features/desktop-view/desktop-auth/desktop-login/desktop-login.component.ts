import {Component} from '@angular/core';
import {TextInputComponent} from "../../../../shared/components/inputs/text-input/text-input.component";
import {TextInputModel} from "../../../../shared/inputs/textInputModel";
import {Validators} from "@angular/forms";
import {
  SubscriptionManagementService
} from "../../../../core/services/subscription-management/subscription-management.service";
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {MatButton} from "@angular/material/button";
import {DesktopLoginCardBackComponent} from "./desktop-login-card-back/desktop-login-card-back.component";
import {rotateCardAnimation} from "../../../../shared/animations/rotate-card.animation";
import {DesktopLoginCardFrontComponent} from "./desktop-login-card-front/desktop-login-card-front.component";

@Component({
  selector: 'desktop-login',
  standalone: true,
  imports: [
    TextInputComponent,
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardActions,
    MatButton,
    MatCardTitle,
    DesktopLoginCardBackComponent,
    DesktopLoginCardFrontComponent
  ],
  templateUrl: './desktop-login.component.html',
  styleUrl: './desktop-login.component.scss',
  providers: [SubscriptionManagementService],
  animations: [
    rotateCardAnimation(),
  ],
})
export class DesktopLoginComponent {
  cardState: "default" | "hover" = "default";
  nameInput: TextInputModel =
    new TextInputModel(
      'username',
      'username',
      [Validators.required],
      'enter your username or email...',
      "outline",
    );
  passwordInput: TextInputModel =
    new TextInputModel(
      'password',
      'password',
      [Validators.required],
      'enter your password...',
      "outline",
    );

  toggleHover(state: "default" | "hover"): void {
    this.cardState = state;
  }

  addEmailValidator(input: TextInputModel): void {
    if (input.getValue().includes("@")) input.addValidators(Validators.email);
    else input.removeValidators(Validators.email);
  }
}
