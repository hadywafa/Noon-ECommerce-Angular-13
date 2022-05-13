import { TreeCategoriesComponent } from "./tree-categories/tree-categories.component";
import { RouterModule } from "@angular/router";
import { SharedModule } from "./../../Shared/shared.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./main/home.component";
import { CategoryProductsComponent } from "./category-products/category-products.component";
import { AllProductsComponent } from "./all-products/all-products.component";
import { NgxPaginationModule } from "ngx-pagination";
import { AfterDiscountPricePipe } from "src/app/Core/Pipes/after-discount-price.pipe";
import { HomeRoutingModule } from "./home-routing.module";
import { HttpClient } from "@angular/common/http";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { TranslateModule } from "@ngx-translate/core";
import { StringLengthPipe } from "src/app/Core/Pipes/string-length.pipe";
import { NameStringLengthPipe } from "src/app/Core/Pipes/name-string-length.pipe";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatTreeModule } from "@angular/material/tree";
import { MatIconModule } from "@angular/material/icon";

export function userHttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}
@NgModule({
  declarations: [
    HomeComponent,
    CategoryProductsComponent,
    AllProductsComponent,
    AfterDiscountPricePipe,
    StringLengthPipe,
    NameStringLengthPipe,
    TreeCategoriesComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    RouterModule,
    NgxPaginationModule,
    MatProgressSpinnerModule,
    MatTreeModule,
    MatIconModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateModule,
        useFactory: userHttpLoaderFactory,
        deps: [HttpClient],
      },
      defaultLanguage: "en",
    }),
  ],
})
export class HomeModule {}
