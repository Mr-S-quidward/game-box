import {inject, Injectable} from "@angular/core";
import {AuthService} from "../services/auth.service";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import * as AuthActions from './auth.action';
import {catchError, map, of, switchMap, tap} from "rxjs";
import {Router} from "@angular/router";
import {FailedResponse} from "../../../models/responses/failed.response";

@Injectable()
export class AuthEffects {
  actions$ = inject(Actions);

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {
  }

  submitLogin$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.submitLogin),
    switchMap((action) => this.authService.login(action).pipe(
      map((result) => {
        if (result.token) return AuthActions.successLogin(result);
        else {
          const failedResponse: FailedResponse = {error: "Unavailable login request"};
          return AuthActions.failedLogin(failedResponse);
        }
      }),
      catchError(err => of(AuthActions.failedLogin(err))),
    )),
  ));

  successLogin$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.successLogin),
    tap((action) => {
      this.router.navigate(["/menu"]).then();
    }),
  ), {dispatch: false});

  successSignInAsGuest$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.submitSignInAsGuest),
    tap(action => {
      console.log('signInAsGuest', 'effect');
      this.router.navigate(["/menu"]).then();
    }),
  ), {dispatch: false});

  submitSignup$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.submitSignUp),
    switchMap(action => this.authService.signup(action).pipe(
      map((result) => AuthActions.successSignUp(result)),
      catchError(err => of(AuthActions.failedSignUp(err))),
    )),
  ));

  successSignup$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.successSignUp),
    tap((action) => {
      this.router.navigate(["/auth/login"]).then();
    }),
  ), {dispatch: false});

  submitLogout$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.submitLogout),
    tap((action) => {
      this.router.navigate(["/auth"]).then();
    }),
  ), {dispatch: false});
}
