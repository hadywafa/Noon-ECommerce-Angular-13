import { Component, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { Router } from "@angular/router";
import { Iuser } from "src/app/Core/Models/iuser";
import { UserAddress } from "src/app/Core/Models/user-address";
import { UserService } from "src/app/Core/Services/user.service";

@Component({
  selector: "app-address",
  templateUrl: "./address.component.html",
  styleUrls: ["./address.component.scss"],
})
export class AddressComponent implements OnInit {
  constructor(private userservices: UserService, private route: Router) {
    this.lang = localStorage.getItem("lang")!;
  }

  user!: Iuser;
  lang!: string;
  addresses: UserAddress[] = [
    {
      city: "",
      street: "",
      postalCode: 0,
      id: 0,
      isPrimary: true,
      addressPhone: "",
    },
  ];
  addressId: number = 0;

  ngOnInit(): void {
    // let  userid=JSON.parse(localStorage.getItem("currentUser")!)
    // console.log(userid)

    // this.userservices.GetAllUsers().subscribe((_users) => {
    //   this.user = _users.find((i) => i.id == "u2")!;
    //   console.log(this.user)
    // });

    this.userservices.GetAllAddress().subscribe((result) => {
      this.addresses = result;
      console.log(result);
    });
  }

  getAddress(addressId: number) {
    this.addressId = addressId;
    this.route.navigateByUrl(`egypt-en/cart/order/payment?addressId=${addressId}`);
  }
}
