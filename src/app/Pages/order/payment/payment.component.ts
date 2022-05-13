import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentMethod } from 'src/app/Core/Enums/payment-method';
import { OrderService } from 'src/app/Core/Services/order.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit {
  isspener: boolean = false;
  addressId: string | null = '0';
  constructor(
    private _orderService: OrderService,
    private _activatedRoute: ActivatedRoute,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.addressId =
      this._activatedRoute.snapshot.queryParamMap.get('addressId');

    console.log(this.addressId);
  }

  PayCash() {
    console.log(this.addressId);

    this.isspener = true;
    document.getElementById('pop')!.style.display = 'block';

    this._orderService
      .PlaceOrder(PaymentMethod.Cash, this.addressId!)
      .subscribe(
        (res) => {




          Swal.fire(
            'Order is  placed',
            'Your order is placed and being proccessed!.',
            'success'
          ).then(() => {
            this.route.navigateByUrl('user/order');

          });
        },
        (err: HttpErrorResponse) => {
          Swal.fire(
            'Order is not placed',
            'Kindly call customer service for more info.',
            'error'
          ).then(() => {
            this.route.navigateByUrl('/egypt-en/cart');
            this.ngOnInit();
          });
        }
      );
  }

  NoonBalance() {
    this.isspener = true;
    document.getElementById('pop')!.style.display = 'block';

    this._orderService
      .PlaceOrder(PaymentMethod.NoonBalance, this.addressId!)
      .subscribe(
        (res) => {
          this.route.navigateByUrl('user/order');
        },
        (err: HttpErrorResponse) => {
          Swal.fire(
            'Order is not placed',
            'Kindly check your balance and try again later.',
            'error'
          ).then(() => {
            this.route.navigateByUrl('/egypt-en/cart');
            this.ngOnInit(); // i love you
          });
        }
      );
  }




  PayPal(){
    this.isspener = true;
    document.getElementById('pop')!.style.display = 'block';

    this.route.navigateByUrl("/PayPal/"+this.addressId!)

  }
}
