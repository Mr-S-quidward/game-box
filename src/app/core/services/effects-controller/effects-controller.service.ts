import {inject, Injectable, OnDestroy} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {filter, Observable, Subject, Subscription} from "rxjs";

@Injectable({
  providedIn: "root",
})
export class EffectsControllerService implements OnDestroy {
  private router = inject(Router);
  private subscription: Subscription | null = null;
  private stopListening$ = new Subject<void>();

  constructor() {
  }

  getScopeURL(url: string): void {
    this.checkIfOutOfEffectScope(url);
  }

  stopEffects(): Observable<void> {
    return this.stopListening$;
  }

  manualStop(): Observable<void> {
    this.stopListening$.next();
    return this.stopListening$;
  }

  protected checkIfOutOfEffectScope(url: string): void {
    this.subscription = this.router.events.pipe(
      filter(events => events instanceof NavigationEnd),
    ).subscribe(ev => {
      if (!ev.url.includes(url)) this.stopListening$.next();
    });
  }

  ngOnDestroy(): void {
    if (!!this.subscription) this.subscription.unsubscribe();
  }
}
