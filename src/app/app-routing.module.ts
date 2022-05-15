import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NotFoundComponent } from "./Shared/not-found/not-found.component";
import { PayPalComponent } from "./Shared/pay-pal/pay-pal.component";
import { ProductDetailsComponent } from "./Pages/pro-details/product-details/product-details.component";
import { CartComponent } from "./Pages/cart/cart.component";
import { OrderComponent } from "./Pages/order/order/order.component";
import { PaymentComponent } from "./Pages/order/payment/payment.component";
import { CategoryProductsComponent } from "./Pages/home/category-products/category-products.component";
import { OrderDetailsComponent } from "./Pages/user/order/order-details/order-details.component";
import { AuthGuard } from "./Core/Guards/auth.guard";

const routes: Routes = [
  { path: "", redirectTo: "/egypt-en", pathMatch: "full" },
  {
    path: "egypt-en",
    loadChildren: () => import(`./Pages/home/home-routing.module`).then((module) => module.HomeRoutingModule),
  },
  {
    path: "user",
    loadChildren: () =>
      import(`./Pages/user/user-routing/user-routing.module`).then((module) => module.UserRoutingModule),
  },
  { path: "egypt-en/p/:pid", component: ProductDetailsComponent },
  // { path: "SignIn", component: SignInComponent },
  { path: "PayPal/:aid", component: PayPalComponent, canActivate: [AuthGuard] },
  { path: "egypt-en/cart/order", component: OrderComponent, canActivate: [AuthGuard] },
  { path: "egypt-en/cart/order/payment", component: PaymentComponent, canActivate: [AuthGuard] },
  { path: "egypt-en/cart", component: CartComponent },
  { path: "egypt-en/:cCode", component: CategoryProductsComponent },
  { path: "egypt-en/OrderDetails/:pid", component: OrderDetailsComponent, canActivate: [AuthGuard] },
  { path: "ErrorPage", component: NotFoundComponent },
  { path: "**", component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
