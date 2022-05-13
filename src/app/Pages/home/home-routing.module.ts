import { HomeComponent } from "./main/home.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AllProductsComponent } from "./all-products/all-products.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    children: [{ path: "", component: AllProductsComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
