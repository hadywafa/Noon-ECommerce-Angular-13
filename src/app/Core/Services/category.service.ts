import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ICategory } from "../Models/icategory";

@Injectable({
  providedIn: "root",
})
export class CategoryService {
  constructor(private _api: HttpClient) {}

  GetAllCategories(): Observable<ICategory[]> {
    return this._api.get<ICategory[]>(`http://localhost:3000/Categories`);
  }
  getCatParentsByCatId(): Observable<ICategory[]> {
    return this._api.get<ICategory[]>(`http://localhost:3000/Categories`);
  }
}
