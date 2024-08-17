import {Component, OnInit} from '@angular/core';
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
import {Store} from "@ngrx/store";
import {AuthStateModel} from "../../../../core/allFeatures/auth/models/authStateModel";
import {ActionsManagementService} from "../../../../core/services/actions-management/actions-management.service";
import {AuthActionModel} from "../../../../core/allFeatures/auth/models/enums/auth-action.model";
import {BaseComponentModel} from "../../../../core/models/components/base-component.model";
import {InitialLoginViewModel, LoginViewModel} from "../../../../core/allFeatures/auth/models/views/login-view.model";
import {IActions} from "../../../../core/models/interfaces/actions.interface";

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
export class DesktopLoginComponent extends BaseComponentModel<LoginViewModel, AuthStateModel, AuthActionModel> implements OnInit {
  viewModel: LoginViewModel = InitialLoginViewModel();
  cardState: "default" | "hover" = "default";
  listOfActions: IActions<AuthActionModel, any>[] = [
    {type: AuthActionModel.addEmailValidator, action: this.addEmailValidator.bind(this)},
    {type: AuthActionModel.toggleHover, action: this.toggleHover.bind(this)},
  ];

  constructor(
    authStore: Store<{ auth: AuthStateModel }>,
    actionManagementService: ActionsManagementService<AuthActionModel, any>,
  ) {
    super(authStore, actionManagementService);
  }

  ngOnInit(): void {
    this.registerActions();
  }

  toggleHover(state: "default" | "hover"): void {
    this.cardState = state;
  }

  addEmailValidator(input: TextInputModel): void {
    if (input.getValue().includes("@")) input.addValidators(Validators.email);
    else input.removeValidators(Validators.email);
  }

  protected readonly AuthActionModel = AuthActionModel;
}
