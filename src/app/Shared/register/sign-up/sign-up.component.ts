import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { ISignUp } from "src/app/Core/Models/view models/vm with request/ISign-up.vm";
import { AuthService } from "src/app/Core/Services/auth.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.scss"],
})
export class SignUpComponent implements OnInit {
  //=========================================================Properties====================================
  //#region Properties
  vmSignUpUser!: ISignUp;
  userForm!: FormGroup;
  @Output() emmiterSignIn: EventEmitter<any> = new EventEmitter<any>();
  //#endregion
  //========================================================Lifecycle Hooks==================================
  //#region Lifecycle Hooks
  constructor(private _auth: AuthService, private _fb: FormBuilder, private _router: Router) {
    // redirect to home if already logged in
    // if (this._auth.currentUserValue) {
    //   this._router.navigate(["/"]);
    // }
    // create Form model using Form Builder
    this.userForm = this._fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]],
      firstName: ["", [Validators.required, Validators.minLength(3)]],
      lastName: ["", [Validators.required, Validators.minLength(3)]],
    });
  }

  ngOnInit(): void {}
  //#endregion
  //===========================================================Methods======================================
  //#region Methods
  //#region Getter => convert form control to property

  get email() {
    return this.userForm.get("email");
  }
  get password() {
    return this.userForm.get("password");
  }
  get firstName() {
    return this.userForm.get("firstName");
  }
  get lastName() {
    return this.userForm.get("lastName");
  }
  //#endregion

  onSubmit() {
    // stop here if form is invalid
    if (this.userForm.invalid) {
      return;
    }
    this.vmSignUpUser = this.userForm.value;
    this.vmSignUpUser.UserName = this.vmSignUpUser.firstName + " " + this.vmSignUpUser.lastName;
    this.vmSignUpUser.role = "Customer";
    // console.log(this.vmSignUpUser);
    this._auth.register(this.vmSignUpUser).subscribe(
      (data) => {
        Swal.fire(
          'Creating Accounting Successfully',
          'ok to start Shopping.',
          'success'
        ).then(()=>{
          location.reload();
        this._router.navigate(["/"])
        })
        ;
      },
      (err) => {
        Swal.fire(
          'some error check your information and try again',
          'close buuton to again.',
          'error'
        )
        
      },
      () => {
        console.log("completed");
      }
    );
    this.userForm.reset();
  }
  goSignin() {
    this.emmiterSignIn.emit();
  }
  //#endregion
}
