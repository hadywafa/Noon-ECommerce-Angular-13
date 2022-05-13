import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { environment } from "src/environments/environment";

import { UserAddress } from "../Models/user-address";

@Injectable({
  providedIn: "root",
})
export class UserService {
  private httpoption = {};
  constructor(private httpclient: HttpClient) {
    this.httpoption = {
      headers: new HttpHeaders({ "Content-Type": "application/json" }),
    };
  }

  ///Mohamed
  //Addresses Methods

  GetAllAddress(): Observable<UserAddress[]> {
    return this.httpclient.get<UserAddress[]>(`${environment.APIBaseURL}/api/User/Addresses`);
  }

  addAddress(address: UserAddress): Observable<UserAddress> {
    return this.httpclient.post<UserAddress>(`${environment.APIBaseURL}/api/User/AddAddress`, address, this.httpoption);
  }

  UpdateAddress(address: UserAddress): Observable<UserAddress> {
    return this.httpclient.put<UserAddress>(`${environment.APIBaseURL}/api/User/UpdateAddress`, address);
  }

  // setPrimaryAddress(addressId: number): void {
  //   this.httpclient.put(`${environment.APIBaseURL}/users/ChangeAddress?addId=${addressId}`, null);
  // }

  deleteAddress(addressId: number) {
    return this.httpclient.delete<UserAddress>(
      `${environment.APIBaseURL}/api/User/DeleteAddress?addressId=${addressId}`
    );
  }
  //Password Methods
  updatePassword(old_Password: string, new_Password: string) {
    let passObj = { oldPassword: old_Password, newPassword: new_Password };
    return this.httpclient.put(`${environment.APIBaseURL}/api/User/UpdatePassword`, passObj);
  }
  //General Methods
  updateGeneralInfo(first: string, last: string) {
    return this.httpclient.put(`${environment.APIBaseURL}/api/User/UpdateUserName?first=${first}&last=${last}`, null);
  }
}
