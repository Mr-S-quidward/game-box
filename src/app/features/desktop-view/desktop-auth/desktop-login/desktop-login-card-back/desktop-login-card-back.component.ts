import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {TextInputComponent} from "../../../../../shared/components/inputs/text-input/text-input.component";
import {TextInputModel} from "../../../../../shared/inputs/textInputModel";
import {LoginViewModel} from "../../../../../core/allFeatures/auth/models/views/login-view.model";
import {Action} from "@ngrx/store";
import * as AuthActions from "../../../../../core/allFeatures/auth/store/auth.action";

@Component({
  selector: 'desktop-login-card-back',
  standalone: true,
  imports: [
    MatButton,
    MatCard,
    MatCardActions,
    MatCardContent,
    MatCardHeader,
    MatCardTitle,
    TextInputComponent
  ],
  templateUrl: './desktop-login-card-back.component.html',
  styleUrl: './desktop-login-card-back.component.scss'
})
export class DesktopLoginCardBackComponent {
  @Input() viewModel!: LoginViewModel;
  @Output() loginEmitter = new EventEmitter<Action>();
  @Output() emailValidatorEmitter = new EventEmitter<TextInputModel>();

  onChangeNameInput(input: TextInputModel): void {
    this.emailValidatorEmitter.emit(input);
  }

  onClickLogin(ev: MouseEvent): void {
    ev.preventDefault();
    ev.stopPropagation();
    this.loginEmitter.emit(AuthActions.submitLogin({
      username: this.viewModel.usernameInput.getValue(),
      password: this.viewModel.passwordInput.getValue(),
    }));
  }
}
