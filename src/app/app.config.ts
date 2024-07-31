import {ApplicationConfig, provideZoneChangeDetection, isDevMode} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideStore} from '@ngrx/store';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {provideEffects} from '@ngrx/effects';
import {provideStoreDevtools} from '@ngrx/store-devtools';
import {SnakeEffect} from "./core/allFeatures/games/snake/store/snake.effect";
import {SnakeReducer} from "./core/allFeatures/games/snake/store/snake.reducer";

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideStoreDevtools({maxAge: 25, logOnly: !isDevMode()}),
    provideStore({
      'snake': SnakeReducer,
    }),
    provideEffects([
      SnakeEffect,
    ]),
  ]
};
