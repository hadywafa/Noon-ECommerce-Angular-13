import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UsersideComponent } from "./userside/userside.component";
import { OrderComponent } from "./order/order.component";
import { AddressComponent } from "./address/address.component";
import { ProfileComponent } from "./profile/profile.component";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { TranslateModule } from "@ngx-translate/core";
import { HttpClient } from "@angular/common/http";
import { UserHearderComponent } from './user-hearder/user-hearder.component';
import { UserFooterComponent } from './user-footer/user-footer.component';
import { PaymentComponent } from './payment/payment.component';
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { OrderDetailsComponent } from './order/order-details/order-details.component';

export function userHttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

@NgModule({

  declarations: [
  
  
    PaymentComponent,
            OrderDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateModule,
        useFactory: userHttpLoaderFactory,
        deps: [HttpClient],
      },
      defaultLanguage: "ar",
    }),
  ],
  exports: [RouterModule,MatProgressSpinnerModule],
})
export class UserModule {}
