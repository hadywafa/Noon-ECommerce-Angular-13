import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ISubCategory } from "../../Core/Models/ISubCategory";

@Injectable({
  providedIn: "root",
})
export class SubCategoriesService {
  constructor(private httpclient: HttpClient) {}

  GetAllSubCategories(): Observable<ISubCategory[]> {
    return this.httpclient.get<ISubCategory[]>(`http://localhost:3000/SubCategories`);
  }
}
