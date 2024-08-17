import {Injectable} from '@angular/core';
import {LoginForm} from "../models/forms/login.form";
import {Observable} from "rxjs";
import {LoginResponse} from "../models/responses/login.response";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../environment/environment";
import {SignUpResponse} from "../models/responses/sign-up.response";
import {SignUpForm} from "../models/forms/sign-up.form";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
  ) {
  }

  login(form: LoginForm): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${environment.serverUrl}/auth/login`, form);
  }

  signup(form: SignUpForm): Observable<SignUpResponse> {
    return this.http.post<SignUpResponse>(`${environment.serverUrl}/auth/signup`, form);
  }
}
