import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { render } from "creditcardpayments/creditCardPayments";
import { PaymentMethod } from "src/app/Core/Enums/payment-method";
import { CartService } from "src/app/Core/Services/cart.service";
import { OrderService } from "src/app/Core/Services/order.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-pay-pal",
  templateUrl: "./pay-pal.component.html",
  styleUrls: ["./pay-pal.component.scss"],
})



export class PayPalComponent implements OnInit {

  addressID?:string
  totalPrice?:number
  constructor(private cartservice:CartService,
              private orderservice:OrderService,
              private route:ActivatedRoute,
              private route1: Router) {
    // debugger;
    this.route.paramMap.subscribe((params) => {

      this.addressID = params.get("aid")!
       console.log("asd"+this.addressID)
    })

  }

  ngOnInit(): void {



  this.cartservice.GetTotalPrice().subscribe(

    res=>{
      this.totalPrice=(res/20);
      console.log(this.totalPrice);

      render({
        id: "#myPayPAlButton",
        currency: "USD",
        value: `${
          Math.round(this.totalPrice* 100) / 100
          }`,
        onApprove: (details) => {
            this.orderservice.PlaceOrder(PaymentMethod.Paypal,this.addressID!).subscribe();

            Swal.fire(
              'Order Placed Successfully!',
              'Your order is proccessing',
              'success'
            ).then(()=>{
              this.route1.navigateByUrl("/user/order");

            })
        }

      });
    }
  )





  }
}
