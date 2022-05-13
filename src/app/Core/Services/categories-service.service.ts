import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { ICategory } from "../../Core/Models/icategory";

@Injectable({
  providedIn: "root",
})
export class CategoriesServiceService {
  constructor(private httpclient: HttpClient) {}

  GetAllCategories(): Observable<ICategory[]> {
    return this.httpclient.get<ICategory[]>(`http://localhost:3000/Categories`);
  }
}
