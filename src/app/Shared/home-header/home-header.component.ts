import { CartService } from "./../../Core/Services/cart.service";
import { RegisterComponent } from "./../register/register.component";
import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { ICategory } from "src/app/Core/Models/icategory";
import { ISubCategory } from "src/app/Core/Models/ISubCategory";
import { CategoriesServiceService } from "src/app/Core/Services/categories-service.service";
import { SubCategoriesService } from "src/app/Core/Services/SubCategories.service";
import { AuthService } from "src/app/Core/Services/auth.service";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-home-header",
  templateUrl: "./home-header.component.html",
  styleUrls: ["./home-header.component.scss"],
})
export class HomeHeaderComponent implements OnInit {
  apiUrl: string = environment.APIBaseURL;
  localstorge: string;
  Categories!: ICategory[];
  SubCategories!: ISubCategory[];
  token!: any;

  userName!: string;

  constructor(
    // private CategoriesService: CategoriesServiceService,
    // private SubCategoriesService: SubCategoriesService,
    private router: Router,
    private _dialog: MatDialog,
    private _auth: AuthService,
    private _cartService:CartService

  ) // private _cartService: CartService
  {
    this.localstorge = localStorage.getItem("lang")!;
  }
countCart!:number
  ngOnInit(): void {
    // this.CategoriesService.GetAllCategories().subscribe((_categories) => {
    //   this.Categories = _categories;
    // });

    // this.SubCategoriesService.GetAllSubCategories().subscribe((subcategories) => {
    //   this.SubCategories = subcategories;
    // });
    //get token from localstorage
    this.token = localStorage.getItem("currentUser");
    //get user name from token
    this.userName = JSON.parse(this.token)["firstName"];

    if (localStorage.getItem("currentUser")) {
      this._cartService.getCartItems().subscribe((prod) => (
        this.countCart=prod.length));
    } 
  }

  loclaztion(st: string) {
    localStorage.setItem("lang", st);
    if (localStorage.getItem("ar") == "ar") {
      document.body.style.direction = "rtl";
    }
    location.reload();
  }
  register() {
    const dialogConfig = new MatDialogConfig();
    // dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this._dialog.open(RegisterComponent, dialogConfig);
  }
  logout() {
    this._auth.logout();
    this.router.navigate(["/"]);
    window.location.reload();
  }
  searchtext: string = "";
  @Output()
  SearchTextCganged: EventEmitter<string> = new EventEmitter<string>();

  onSearchTextChange(st: string) {
    this.searchtext = st;
    this.SearchTextCganged.emit(this.searchtext);
  }
}
