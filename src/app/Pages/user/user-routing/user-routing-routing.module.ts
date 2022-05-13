import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "src/app/Core/Guards/auth.guard";
import { AddressComponent } from "../address/address.component";
import { OrderComponent } from "../order/order.component";
import { PaymentComponent } from "../payment/payment.component";
import { ProfileComponent } from "../profile/profile.component";
import { ReturnComponent } from "../return/return.component";
import { UsersideComponent } from "../userside/userside.component";

const routes: Routes = [
  {
    path: "",
    component: UsersideComponent,
    children: [
      { path: "order", component: OrderComponent },
      { path: "Address", component: AddressComponent },
      { path: "profile", component: ProfileComponent },
      { path: "return", component: ReturnComponent },
      { path: "payment", component: PaymentComponent },
    ],
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingRoutingModule {}
