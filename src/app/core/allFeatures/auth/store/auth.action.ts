import {makeActionType} from "../../../store/base.action";
import {createAction, props} from "@ngrx/store";
import {LoginForm} from "../models/forms/login.form";
import {LoginResponse} from "../models/responses/login.response";
import {FailedResponse} from "../../../models/responses/failed.response";
import {SignUpForm} from "../models/forms/sign-up.form";
import {SignUpResponse} from "../models/responses/sign-up.response";

export const SUBMIT_SIGNUP_ACTION_TYPE = makeActionType("Auth", "SUBMIT_SIGNUP");
export const SUCCESS_SIGNUP_ACTION_TYPE = makeActionType("Auth", "SUCCESS_SIGNUP");
export const FAILED_SIGNUP_ACTION_TYPE = makeActionType("Auth", "FAILURE_SIGNUP");

export const SUBMIT_SIGNIN_AS_GUEST_ACTION_TYPE = makeActionType("Auth", "SUBMIT_SIGNIN_AS_GUEST");

export const SUBMIT_LOGIN_ACTION_TYPE = makeActionType("Auth", "SUBMIT_LOGIN");
export const SUCCESS_LOGIN_ACTION_TYPE = makeActionType("Auth", "SUCCESS_LOGIN");
export const FAILED_LOGIN_ACTION_TYPE = makeActionType("Auth", "FAILURE_LOGIN");

export const SUBMIT_LOGOUT_ACTION_TYPE = makeActionType("Auth", "SUBMIT_LOGOUT");

export const submitSignUp = createAction(
  SUBMIT_SIGNUP_ACTION_TYPE,
  props<SignUpForm>(),
);
export const successSignUp = createAction(
  SUCCESS_SIGNUP_ACTION_TYPE,
  props<SignUpResponse>(),
);
export const failedSignUp = createAction(
  FAILED_SIGNUP_ACTION_TYPE,
  props<FailedResponse>(),
);

export const submitSignInAsGuest = createAction(
  SUBMIT_SIGNIN_AS_GUEST_ACTION_TYPE,
);

export const submitLogin = createAction(
 SUBMIT_LOGIN_ACTION_TYPE,
  props<LoginForm>(),
);
export const successLogin = createAction(
  SUCCESS_LOGIN_ACTION_TYPE,
  props<LoginResponse>(),
);
export const failedLogin = createAction(
  FAILED_LOGIN_ACTION_TYPE,
  props<FailedResponse>(),
);

export const submitLogout = createAction(
  SUBMIT_LOGOUT_ACTION_TYPE,
);
