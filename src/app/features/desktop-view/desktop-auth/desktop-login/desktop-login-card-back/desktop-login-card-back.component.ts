import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {TextInputComponent} from "../../../../../shared/components/inputs/text-input/text-input.component";
import {TextInputModel} from "../../../../../shared/inputs/textInputModel";

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
  @Input() nameInput!: TextInputModel;
  @Input() passwordInput!: TextInputModel;
  @Output() loginEmitter = new EventEmitter<void>();
  @Output() emailValidatorEmitter = new EventEmitter<TextInputModel>();

  onChangeNameInput(input: TextInputModel): void {
    this.emailValidatorEmitter.emit(input);
  }

  onClickLogin(): void {
    this.loginEmitter.emit();
  }
}
