import {ApplicationConfig, provideZoneChangeDetection, isDevMode} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideState, provideStore} from '@ngrx/store';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {provideEffects} from '@ngrx/effects';
import {provideStoreDevtools} from '@ngrx/store-devtools';
import {snakeReducer} from "./core/allFeatures/games/snake/store/snake.reducer";
import {SnakeEffect} from "./core/allFeatures/games/snake/store/snake.effect";
import {SnakeStateSelector} from "./core/allFeatures/games/snake/store/snake.selector";

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(routes),
    provideStore([
      snakeReducer
    ]),
    provideAnimationsAsync(),
    // provideState(),
    provideEffects([
      // SnakeEffect,
    ]),
    provideStoreDevtools({maxAge: 25, logOnly: !isDevMode()})]
};
