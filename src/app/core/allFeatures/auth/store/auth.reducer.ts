import {AuthStateModel} from "../models/authStateModel";
import {createReducer, on} from "@ngrx/store";
import {successLogin, submitSignInAsGuest, successSignUp, submitLogout} from "./auth.action";

export const initialAuthState: AuthStateModel = {
  token: null,
  isGuest: false,
}

export const authReducer = createReducer(
  initialAuthState,
  on(successSignUp, (state, {token}): AuthStateModel => ({...state, token})),
  on(successLogin, (state, {token}): AuthStateModel => ({...state, token})),
  on(submitSignInAsGuest, (state): AuthStateModel => ({...state, isGuest: true})),
  on(submitLogout, (): AuthStateModel => ({...initialAuthState})),
)

export function AuthReducer(state: any, action: any) {
  return authReducer(state, action);
}
