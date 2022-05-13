import { IProduct } from "./../Models/iproduct";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { IwishList } from "../Models/iwish-list-";

@Injectable({
  providedIn: "root",
})
export class WishListService {
  constructor(private _api: HttpClient) {}

  getWishListItems(): Observable<IwishList[]> {
    return this._api.get<IwishList[]>(`${environment.APIBaseURL}` + `/api/Wishlist/GetAll`);
  }

  // Add to cart
  addToWishList(proId: number) {
    return this._api.post(`${environment.APIBaseURL}` + `/api/Wishlist/Add?proId=${proId}`, null);
  }

  //Remove from cart
  removeFromWishList(proId: number) {
    return this._api.delete(`${environment.APIBaseURL}` + `/api/Wishlist/Remove?proId=${proId}`);
  }
}
