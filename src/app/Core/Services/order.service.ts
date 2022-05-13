import { Iorder } from "src/app/Core/Models/iorder";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { PaymentMethod } from "../Enums/payment-method";
import { OrderVM } from "../Models/view models/OrderVM/order-vm";
import { OrderDetails } from "../Models/view models/OrderVM/order-details";

@Injectable({
  providedIn: "root",
})
export class OrderService {
  private httpoption = {};
  constructor(private httpclient: HttpClient) {
    this.httpoption = {
      headers: new HttpHeaders({ "Content-Type": "application/json" }),
    };
  }

  GetAllorders(): Observable<Iorder[]> {
    return this.httpclient.get<Iorder[]>("http://localhost:3000/orders");
  }

  GetorderById(oid: number): Observable<Iorder> {
    return this.httpclient.get<Iorder>(`http://localhost:3000/orders?id=${oid}`);
  }

  updateorder(order: Iorder): Observable<Iorder> {
    return this.httpclient.put<Iorder>(
      `http://localhost:3000/orders/${order.id}`,
      JSON.stringify(order),
      this.httpoption
    );
  }

  PlaceOrder(payment: PaymentMethod, addressId: string) {
    return this.httpclient.post(
      `${environment.APIBaseURL}/api/Order/Add?PaymentMethod=${payment}&addressId=${addressId}`,
      addressId
    );
  }

  GetAll(): Observable<OrderVM[]> {
    return this.httpclient.get<OrderVM[]>(`${environment.APIBaseURL}/api/Order/GetAll`);
  }

  OrderDetails(id: string): Observable<OrderDetails> {
    return this.httpclient.get<OrderDetails>(`${environment.APIBaseURL}/api/Order/OrderDetails/?id=${id}`);
  }

  GetOrderDetails(id: string): Observable<Iorder> {
    return this.httpclient.get<Iorder>(`${environment.APIBaseURL}/api/Order/GetOrderDetails/?id=${id}`);
  }
}
