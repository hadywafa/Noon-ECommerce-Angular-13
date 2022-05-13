import { SharedModule } from "./../../Shared/shared.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ProDetailsRoutingModule } from "./pro-details-routing.module";
import { OverviewComponent } from "./product-details/overview/overview.component";
import { SpecificationsComponent } from "./product-details/specifications/specifications.component";
import { ReviewsComponent } from "./product-details/reviews/reviews.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";

@NgModule({
  declarations: [ProductDetailsComponent, OverviewComponent, SpecificationsComponent, ReviewsComponent],
  imports: [CommonModule, SharedModule,FormsModule],
})
export class ProDetailsModule {}
