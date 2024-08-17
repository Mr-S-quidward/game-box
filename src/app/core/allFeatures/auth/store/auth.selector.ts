import {createFeatureSelector, createSelector, DefaultProjectorFn, MemoizedSelector} from "@ngrx/store";
import {AuthStateModel} from "../models/authStateModel";

export const selectAuthState
  : MemoizedSelector<object, AuthStateModel, DefaultProjectorFn<AuthStateModel>>
  = createFeatureSelector<AuthStateModel>("auth");

export const getAuthToken = createSelector(
  selectAuthState,
  s => s.token,
);

export const getWhetherItsGuest = createSelector(
  selectAuthState,
  s => s.isGuest,
)
