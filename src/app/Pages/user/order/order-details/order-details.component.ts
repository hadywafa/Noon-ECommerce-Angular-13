import { Location } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderDetails } from 'src/app/Core/Models/view models/OrderVM/order-details';
import { OrderService } from 'src/app/Core/Services/order.service';


@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {
  OD!:OrderDetails
  orderID!:string

  constructor(private orderservice: OrderService,
              private _activatedRoute: ActivatedRoute,
              private route:Router,
              private location:Location) { }

  ngOnInit(): void {

    this._activatedRoute.paramMap.subscribe((params) => {
      this.orderID = params.get('pid')! ;

           })

    this.orderservice.OrderDetails(this.orderID).subscribe(
      order=>{this.OD=order;
        console.log(this.OD)
      },
      (err:HttpErrorResponse)=>{
        this.route.navigateByUrl("/ErrorPage")
      }



      )


  }


  back(){
    this.location.back();

  }


}
