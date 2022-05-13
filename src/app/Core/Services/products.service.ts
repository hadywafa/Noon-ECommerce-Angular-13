import { Ireview } from "./../Models/ireview";
import { ICategory } from "src/app/Core/Models/icategory";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { IProduct } from "../../Core/Models/iproduct";

@Injectable({
  providedIn: "root",
})
export class ProductsService {
  constructor(private httpclient: HttpClient) {}

  //#region [Product Services]
  GetAllProducts(): Observable<IProduct[]> {
    return this.httpclient.get<IProduct[]>(`${environment.APIBaseURL}` + "/api/Products/GetAll");
  }

  GetProductsByCatCode(catCode: string): Observable<IProduct[]> {
    return this.httpclient.get<IProduct[]>(
      `${environment.APIBaseURL}` + `/api/Products/GetProductsByCatCode/${catCode}`
    );
  }

  GetProductById(pid: number): Observable<IProduct> {
    return this.httpclient.get<IProduct>(`${environment.APIBaseURL}` + `/api/Products/GetProductById/${pid}`);
  }
  //#endregion

  //#region [Category Services]
  getTreeCategories(): Observable<ICategory[]> {
    return this.httpclient.get<ICategory[]>(`${environment.APIBaseURL}` + "/api/Products/GetTreeCategories");
  }

  GetCategoryPath(catId: number): Observable<ICategory[]> {
    return this.httpclient.get<ICategory[]>(
      `${environment.APIBaseURL}` + `/api/Products/GetCategoryPath?parentCatId=${catId}`
    );
  }
  //get all review for a product
  GetAllProductReviews(proId: number): Observable<Ireview[]> {
    return this.httpclient.get<Ireview[]>(`${environment.APIBaseURL}` + `/api/Products/GetAllProductReviews/${proId}`);
  }
  //#endregion
  //
}
