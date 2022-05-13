import { Rate } from "./../../../../Core/Models/rate.enum";
import { Ireview } from "./../../../../Core/Models/ireview";
import { ProductsService } from "src/app/Core/Services/products.service";
import { Component, Input, OnInit } from "@angular/core";
import { IProduct } from "src/app/Core/Models/iproduct";

@Component({
  selector: "app-reviews",
  templateUrl: "./reviews.component.html",
  styleUrls: ["./reviews.component.scss"],
})
export class ReviewsComponent implements OnInit {
  @Input()
  chSelectedProduct!: IProduct;
  productReviews!: Ireview[];
  rateEnum = Rate;
  constructor(private _proService: ProductsService) {}

  ngOnInit(): void {
    this._proService.GetAllProductReviews(this.chSelectedProduct.id).subscribe((data) => {
      this.productReviews = data;
      console.log(this.productReviews);
    });
  }
}
