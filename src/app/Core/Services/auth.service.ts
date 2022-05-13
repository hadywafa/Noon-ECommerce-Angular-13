import { IAuthUser } from "../../Core/Models/view models/vm from response/IAuthUser.vm";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, map, Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { ISignIn } from "../../Core/Models/view models/vm with request/ISign-in.vm";
import { ISignUp } from "../../Core/Models/view models/vm with request/ISign-up.vm";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  //create BehaviorSubject obj for IsUserLogged
  private currentUserSubject: BehaviorSubject<IAuthUser>;
  public currentUser: IAuthUser;

  //=========================================================Lifecycle Hooks====================================

  constructor(private _api: HttpClient, private _router: Router) {
    // assign  IsUserLogged property to BehaviorSubject obj to share data
    this.currentUserSubject = new BehaviorSubject<IAuthUser>(JSON.parse(localStorage.getItem("currentUser") || "{}"));
    this.currentUser = this.currentUserSubject.value;
  }

  //=========================================================    Methods  ====================================
  //login user
  login(vmSignIn: ISignIn) {
    return this._api.post<IAuthUser>(`${environment.APIBaseURL}` + "/api/Auth/SignIn", vmSignIn).pipe(
      map((authUser) => {
        // login successful if there's a jwt token in the response
        if (authUser && authUser.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem("currentUser", JSON.stringify(authUser));
          this.currentUserSubject.next(authUser);
        }
        return authUser;
      })
    );
  }

  //logout user
  logout() {
    localStorage.removeItem("currentUser");
    // this.isLoggedSubject.next(false);
    this.currentUserSubject.next({} as IAuthUser);
  }
  //register user
  register(vmSignUp: ISignUp) {
    return this._api.post(`${environment.APIBaseURL}` + "/api/Auth/Register", vmSignUp);
  }
}
