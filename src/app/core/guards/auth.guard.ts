import {Injectable} from "@angular/core";
import {
  CanActivate,
  Router,
} from "@angular/router";
import {Store} from "@ngrx/store";
import {AuthStateModel} from "../allFeatures/auth/models/authStateModel";
import {catchError, map, Observable, of, switchMap, take, tap} from "rxjs";
import {getAuthToken, getWhetherItsGuest} from "../allFeatures/auth/store/auth.selector";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  token$: Observable<string | null>;
  guest$: Observable<boolean>;

  constructor(
    private authStore: Store<AuthStateModel>,
    private router: Router,
  ) {
    this.token$ = this.authStore.select(getAuthToken);
    this.guest$ = this.authStore.select(getWhetherItsGuest);
  }

  canActivate(): Observable<boolean> {
    return this.token$.pipe(
      take(1),
      map(token => !!token),
      switchMap(isAuthenticated =>
        isAuthenticated ? of(true) : this.guest$.pipe(
          tap(isGuest => {
            if (!isGuest) this.router.navigate(["/auth"]).then();
          }),
          catchError(()=>{
            this.router.navigate(["/auth"]).then();
            return of(false);
          }),
        )
      ),
    )
  }

}
