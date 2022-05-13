import { Component, OnInit } from "@angular/core";
@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  isSignIn!: boolean;
  isSignUp!: boolean;
  constructor() {}
  ngOnInit(): void {
    this.isSignIn = false;
    this.isSignUp = true;
  }
  openSignIn() {
    this.isSignIn = true;
    this.isSignUp = false;
  }
  openSignUp() {
    this.isSignIn = false;
    this.isSignUp = true;
  }
}
