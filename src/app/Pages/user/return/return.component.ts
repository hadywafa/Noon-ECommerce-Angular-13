import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Iorder } from "src/app/Core/Models/iorder";
import { OrderService } from "src/app/Core/Services/order.service";

@Component({
  selector: "app-return",
  templateUrl: "./return.component.html",
  styleUrls: ["./return.component.scss"],
})
export class ReturnComponent implements OnInit {
  orderList: Iorder[] = [];
  lang!: string;
  constructor(private orderservice: OrderService, private route: Router) {
    this.lang = localStorage.getItem("lang")!;
  }

  ngOnInit(): void {
    // this.orderservice.GetAllorders().subscribe((_orders) => {
    //   this.orderList = _orders.filter((o) => o.returned == true);
    // });
  }

  Approved(id: string) {
    // let order = this.orderList.find((o) => o.id == id);
    // order!.returned = false;
    // this.orderservice.updateorder(order!).subscribe({
    //   next: () => {
    //     location.reload();
    //   },
    // });
  }
}
