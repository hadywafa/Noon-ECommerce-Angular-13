import { SharedModule } from "./Shared/shared.module";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CartComponent } from "./Pages/cart/cart.component";
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgxPaginationModule } from "ngx-pagination";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HomeModule } from "./Pages/home/home.module";
import { UserModule } from "./Pages/user/user.module";
import { ProDetailsModule } from "./Pages/pro-details/pro-details.module";

import { WishListComponent } from './Pages/cart/wish-list/wish-list.component';
import { OrderSummryComponent } from './Pages/cart/order-summry/order-summry.component';

import { JwtInterceptor } from "./Core/Interceptors/jwt.interceptor";
import { ErrorInterceptor } from "./Core/Interceptors/error.interceptor";
import { OrderComponent } from './Pages/order/order/order.component';
import { AddressComponent } from './Pages/order/address/address.component';
import { PaymentComponent } from './Pages/order/payment/payment.component';
import { OrderSummeryOrderComponent } from './Pages/order/order-summery-order/order-summery-order.component';
import { PaymentOrderComponent } from './Pages/order/payment/payment-order/payment-order.component';
import { StringLengthPipe } from './Core/Pipes/string-length.pipe';
import { NameStringLengthPipe } from './Core/Pipes/name-string-length.pipe';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

@NgModule({
  declarations: [AppComponent, CartComponent, WishListComponent, OrderSummryComponent, OrderComponent, AddressComponent, PaymentComponent, OrderSummeryOrderComponent, PaymentOrderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    SharedModule,
    HomeModule,
    UserModule,
    ProDetailsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      defaultLanguage: "en",
    }),
    BrowserAnimationsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
  // entryComponents: [SignInComponent],
})
export class AppModule {}
