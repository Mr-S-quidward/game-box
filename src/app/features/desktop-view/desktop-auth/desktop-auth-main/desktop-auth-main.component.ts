import {Component, OnInit} from '@angular/core';
import {DesktopAuthRoutes} from "../desktop-auth.routes";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {ActionsManagementService} from "../../../../core/services/actions-management/actions-management.service";
import {AuthActionModel} from "../../../../core/allFeatures/auth/models/enums/auth-action.model";
import {Store} from "@ngrx/store";
import {AuthStateModel} from "../../../../core/allFeatures/auth/models/authStateModel";
import {BaseComponentModel} from "../../../../core/models/components/base-component.model";
import {CuLinkComponent} from "../../../../shared/components/cu-link/cu-link.component";
import {
  AuthMainViewModel,
  initialAuthMainViewModel
} from "../../../../core/allFeatures/auth/models/views/auth-main-view.model";
import {IActions} from "../../../../core/models/interfaces/actions.interface";
import * as AuthActions from "../../../../core/allFeatures/auth/store/auth.action";

@Component({
  selector: 'desktop-auth-main',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    CuLinkComponent
  ],
  templateUrl: './desktop-auth-main.component.html',
  styleUrl: './desktop-auth-main.component.scss'
})
export class DesktopAuthMainComponent extends BaseComponentModel<AuthMainViewModel, AuthStateModel, AuthActionModel> implements OnInit {
  protected readonly authRoutes = DesktopAuthRoutes.filter(v => v.path!.length > 0);
  viewModel: AuthMainViewModel = initialAuthMainViewModel();
  listOfActions: IActions<AuthActionModel, any>[] = [];

  constructor(
    authStore: Store<{ auth: AuthStateModel }>,
    actionManagementService: ActionsManagementService<AuthActionModel, any>,
  ) {
    super(authStore, actionManagementService);
  }

  ngOnInit(): void {
    this.registerActions();
  }

  onSignInAsGuest(): void {
    this.handleActions("store", AuthActions.submitSignInAsGuest());
  }

}
