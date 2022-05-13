import { AuthService } from "../Services/auth.service";
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  constructor(private _auth: AuthService, private _router: Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const currentUser = this._auth.currentUser;
    if (currentUser.isAuthenticated) {
      // authorised so return true
      return true;
    }
    this._router.navigate(["/Login"], {
      // not logged in so redirect to login page with the return url
      queryParams: { returnUrl: state.url },
    });
    return false;
  }
}
