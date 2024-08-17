import {TextInputModel} from "../../../../../shared/inputs/textInputModel";
import {NewTextInput} from "../../../../../shared/tools/functions/inputs/new-text-input.func";
import {Validators} from "@angular/forms";

export interface LoginViewModel {
  usernameInput: TextInputModel;
  passwordInput: TextInputModel;
}

export const InitialLoginViewModel = (): LoginViewModel => (
  {
    usernameInput: NewTextInput({
      inputName: 'username',
      inputLabel: 'username',
      validators: [Validators.required],
      placeholder: 'enter your username or email...',
      appearance: "outline",
    }),
    passwordInput: NewTextInput({
      inputName: 'password',
      inputLabel: 'password',
      validators: [Validators.required],
      placeholder: 'enter your password...',
      appearance: "outline",
    }),
  }
)
