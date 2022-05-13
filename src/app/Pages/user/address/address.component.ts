import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {UserAddress} from "src/app/Core/Models/user-address"
import { Iuser } from "src/app/Core/Models/iuser";
import { UserService } from "src/app/Core/Services/user.service";
import Swal from 'sweetalert2'
@Component({
  selector: "app-address",
  templateUrl: "./address.component.html",
  styleUrls: ["./address.component.scss"],
})
export class AddressComponent implements OnInit {
  user!: Iuser;
  address: UserAddress = { id: 0, city: "", street: "", postalCode: 0, isPrimary: false, addressPhone: "" };
  Addresses!: UserAddress[];
isspener:boolean=false
  lang!: string;
  constructor(private userservice: UserService, private route: Router) {
    this.lang = localStorage.getItem("lang")!;
  }

  ngOnInit(): void {
    this.userservice.GetAllAddress().subscribe((_address) => {
      this.user = JSON.parse(localStorage.getItem("currentUser")!);
      this.Addresses = _address;
      console.log(this.Addresses);
    });
  }
  showdivAdd() {




    let div = document.getElementById("addAddress");
    div?.classList.remove("d-none");
    document.getElementById("pop")?.classList.add("pop");
  }
  showdivupdate(id: number) {
    let add = this.Addresses.find((a) => a.id == id);
    if (add != null) {
      this.address = add;
    }
    console.log(this.Addresses);
    console.log(id);
    let div = document.getElementById("updateAddress");
    div?.classList.remove("d-none");
    document.getElementById("pop")?.classList.add("pop");
  }
  divhideAdd() {

    let div = document.getElementById("addAddress");
    div?.classList.add("d-none");
    document.getElementById("pop")?.classList.remove("pop");
  }
  divhideupdate() {
    let div = document.getElementById("updateAddress");
    div?.classList.add("d-none");
    document.getElementById("pop")?.classList.remove("pop");
  }
  addAddress(_city: any, street: any, postal: any, phone: any) {
    this.address.city = _city;
    this.address.street = street;
    this.address.postalCode = postal;
    this.address.addressPhone = phone;
    this.userservice.addAddress(this.address).subscribe({
      next: () => {
        console.log("inside next");
      },
      error: (err) => {
        console.log("inside error");
        console.log(err);
      },
      complete: () => {
        Swal.fire(
          'add successfuuly!',
          'You clicked the button!',
          'success'
        ).then(()=>{
          this.divhideAdd();
        this.route.navigateByUrl("/user/Address");
        this.ngOnInit(); // i love you
        })

      },
    });
  }
  change(def: boolean, id: number) {
    // this.Addresses.filter((a) => a.id != id).map((s) => (s.isPrimary = false));
    // this.Addresses.find((a) => a.id == id)!.isPrimary = !def;
    this.address = this.Addresses.find((a) => a.id == id)!;
    this.address.isPrimary = true;
    this.userservice.UpdateAddress(this.address).subscribe(
      (next) => {},
      (err) => {
        console.log(err);
      },
      () => {
        Swal.fire(
          'update Primary Address succesfully!',
          'You clicked the button!',
          'success'
        ).then(()=>{
          this.divhideupdate();
          this.route.navigateByUrl("/user/Address");
          this.ngOnInit(); // i love you
        })

      }
    );
  }
  deleteAddrsess(id: number) {
    console.log(id);
    this.userservice.deleteAddress(id).subscribe(
      (next) => {},
      (err) => {
        console.log(err);
      },
      () => {
        Swal.fire(
          'Deleteing successfuuly!',
          'You clicked the button!',
          'success'
        ).then(()=>{
          this.route.navigateByUrl("/user/Address");
          this.ngOnInit(); // i love you
        })

      }
    );
  }

  updateAddrsess(id: any, _city: string, _street: string, postal: any) {
    this.address = this.Addresses.find((a) => a.id == id)!;
    this.address.city = _city;
    this.address.street = _street;

    this.userservice.UpdateAddress(this.address).subscribe(
      (next) => {},
      (err) => {
        console.log(err);
      },
      () => {
        Swal.fire(
          'Updating successfuuly!',
          'You clicked the button!',
          'success'
        ).then(()=>{
          this.divhideupdate();
          this.route.navigateByUrl("/user/Address");
          this.ngOnInit(); // i love you
        })

      }
    );
  }
}
