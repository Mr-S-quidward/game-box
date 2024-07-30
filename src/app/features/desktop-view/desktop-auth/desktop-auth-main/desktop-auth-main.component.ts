import {Component, OnInit} from '@angular/core';
import {DesktopAuthRoutes} from "../desktop-auth.routes";
import {Router, RouterLink, RouterLinkActive} from "@angular/router";
import {ActionsManagementService} from "../../../../core/services/manage-actions/actions-management.service";
import {AuthActionModel} from "../../../../core/allFeatures/auth/models/action.model";

@Component({
  selector: 'desktop-auth-main',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './desktop-auth-main.component.html',
  styleUrl: './desktop-auth-main.component.scss'
})
export class DesktopAuthMainComponent implements OnInit {
  protected readonly authRoutes = DesktopAuthRoutes.filter(v => v.path!.length > 0);

  constructor(
    private actionManagementService: ActionsManagementService<AuthActionModel, any>,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.registerActions();
  }

  registerActions(): void {
    this.actionManagementService.registerActions([
      {type: AuthActionModel.signInAsGuest, action: this.onSignInAsGuest.bind(this)},
    ]);
  }

  handleActions(actionType: AuthActionModel, ...args: any[]): void {
    this.actionManagementService.manageActions(actionType, ...args);
  }

  onSignInAsGuest(path: string): void {
    this.router.navigate([path]).then();
  }

  protected readonly AuthActionModel = AuthActionModel;
}
