import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Iuser } from "src/app/Core/Models/iuser";
import { UserService } from "src/app/Core/Services/user.service";
import Swal from 'sweetalert2'
@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
})
export class ProfileComponent implements OnInit {
  user!: Iuser;
  lang: string;
  constructor(private userservice: UserService, private route: Router) {
    this.lang = localStorage.getItem("lang")!;
  }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("currentUser")!);
  }
  UpdateGenral(first: string, last: string) {
    this.userservice.updateGeneralInfo(first, last).subscribe({
      next: () => {
        this.user.firstName = first;
        this.user.lastName = last;
        localStorage.setItem("currentUser", JSON.stringify(this.user));
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        Swal.fire(
          'update General Information succesfully!',
          'You clicked the button!',
          'success'
        ).then(()=>{
          this.route.navigateByUrl("/user/profile");
          this.ngOnInit(); // i love you
        })
      
      },
    });
  }

  showdiv() {
    let div = document.getElementById("updateAddress");
    div?.classList.remove("d-none");
    document.getElementById("pop")?.classList.add("pop");
  }

  divhide() {
    let div = document.getElementById("updateAddress");
    div?.classList.add("d-none");
    document.getElementById("pop")?.classList.remove("pop");
  }
  updatePassword(cpass: any, newpass: any) {
    this.userservice.updatePassword(cpass, newpass).subscribe({
      next: () => {},
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        Swal.fire(
          'change Password succesfully!',
          'You clicked the button!',
          'success'
        ).then(()=>{
          this.divhide();
        this.route.navigateByUrl("/user/profile");
        this.ngOnInit(); // i love you
        })
       
      },
    });
  }
}
