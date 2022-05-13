import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICartProduct } from 'src/app/Core/Models/icart-product';
import { CartService } from 'src/app/Core/Services/cart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  lang: string = 'en';
  LocalStorageProducts!: ICartProduct[];
  isLogged: boolean = false;
  totalPrice!: number;
  constructor(private _cartService: CartService, private route: Router) {
    this.lang = localStorage.getItem('lang')!;
  }

  ngOnInit(): void {
    if (localStorage.getItem('currentUser')) {
      this.isLogged = true;
    }
    if (localStorage.getItem('currentUser')) {
      this._cartService
        .getCartItems()
        .subscribe((prod) => {this.LocalStorageProducts = prod


         this._cartService
      .GetTotalPrice()
      .subscribe((price) => (this.totalPrice = price));

        });
    } else {
      if (localStorage.getItem('LocalStorageProducts')) {
        this.LocalStorageProducts = JSON.parse(
          localStorage.getItem('LocalStorageProducts')!
        );
        console.log(this.LocalStorageProducts);
      }
    }


  }

  Remove(ProductID: number) {
    if (localStorage.getItem('currentUser')) {
      this._cartService.removeFromCart(ProductID).subscribe(
        (next) => {},
        (err) => {
          console.log(err);
        },
        () => {
          Swal.fire(
            'Product deleted from your cart!',
            'Click the button to continue',
            'success'
          ).then(() => {
            this.route.navigateByUrl('/egypt-en/cart');
            location.reload();
            this.ngOnInit(); // i love you
          });
        }
      );
    } else {
      localStorage.setItem(
        'LocalStorageProducts',
        JSON.stringify(
          this.LocalStorageProducts.filter((p) => p.product.id != ProductID)
        )
      );
    }
  }

  CheckOut() {
    this.route.navigateByUrl('egypt-en/cart/order');
  }
}
