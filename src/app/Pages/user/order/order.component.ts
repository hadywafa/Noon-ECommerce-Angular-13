import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeliveryStatus } from 'src/app/Core/Enums/delivery-status';
import { Iorder } from 'src/app/Core/Models/iorder';
import { OrderDetails } from 'src/app/Core/Models/view models/OrderVM/order-details';
import { OrderVM } from 'src/app/Core/Models/view models/OrderVM/order-vm';
import { OrderService } from 'src/app/Core/Services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  // orderList: Iorder[] = [];
  OLs: Array<OrderVM> = [];
  OrderDetails!: OrderDetails;
  lang!: string;
  isspener: boolean = true;

  page: number = 1;
  count: number = 0;

  constructor(private orderservice: OrderService, private route: Router) {
    this.lang = localStorage.getItem('lang')!;
  }

  ngOnInit(): void {
    this.orderservice.GetAll().subscribe((order) => {
      this.OLs = order;
    });

    //     // if(this.orderList !=null){
    //     //   this.isspener=false
    //     //   document.getElementById("pop")!.style.display ="none";
    //     // }

    // )

    // this.orderservice.GetAllorders().subscribe((_orders) => {
    //   this.orderList = _orders;
    //   console.log(this.orderList);
    // });

    // this.OLs.push({OrderId:1,DeliveryStatus:DeliveryStatus.Cancelled,TotalPrice:1234})
    // this.OLs.push({OrderId:1,DeliveryStatus:DeliveryStatus.Cancelled,TotalPrice:1234})
    // this.OLs.push({OrderId:1,DeliveryStatus:DeliveryStatus.Cancelled,TotalPrice:1234})
    // this.OLs.push({OrderId:1,DeliveryStatus:DeliveryStatus.Cancelled,TotalPrice:1234})
  }

  onDataChange(event: any) {
    this.page = event;
  }
}
