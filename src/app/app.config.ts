import {ApplicationConfig, provideZoneChangeDetection, isDevMode} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideStore} from '@ngrx/store';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {provideEffects} from '@ngrx/effects';
import {provideStoreDevtools} from '@ngrx/store-devtools';
import {_RootStore} from "./core/allFeatures/root.store";

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideStoreDevtools({maxAge: 25, logOnly: !isDevMode()}),
    provideStore(_RootStore.reducers),
    provideEffects(_RootStore.effects),
  ]
};
