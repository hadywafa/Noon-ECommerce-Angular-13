import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";
import { AuthService } from "../Services/auth.service";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private _authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((err) => {
        if (err.status === 401) {
          // auto logout if 401 response returned from api =>  to prevent user from accessing unauthorized pages if token is expired or invalid
          this._authService.logout();
          location.reload();
        }

        // console.log(err);
        const errorMsg = err.error || err.statusText;
        return throwError(errorMsg);
      })
    );
  }
}
