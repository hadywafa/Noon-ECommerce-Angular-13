import { Component, OnInit, OnChanges, SimpleChanges } from "@angular/core";
import { IProduct } from "src/app/Core/Models/iproduct";
import { ProductsService } from "src/app/Core/Services/products.service";
import { HomeComponent } from "../main/home.component";

@Component({
  selector: "app-all-products",
  templateUrl: "./all-products.component.html",
  styleUrls: ["./all-products.component.scss"],
})
export class AllProductsComponent implements OnInit, OnChanges {
  Products!: IProduct[];
  page: number = 1;
  count: number = 0;
  isspener:boolean=true
  productSize: number = 20;
  productSizes: any = [5, 10, 15, 20];
  localstorge: string = "en";
  arRegx: string = "/[\u0600-\u06FF]/";

  constructor(private productsService: ProductsService) {
    if (localStorage.getItem("lang")) this.localstorge = localStorage.getItem("lang")!;
  }
  ngOnChanges(changes: SimpleChanges): void {}

  ngOnInit(): void {
    this.productsService.GetAllProducts().subscribe((productlist) => {
      this.Products = productlist;
      if(this.Products !=null){
        this.isspener=false
        document.getElementById("pop")!.style.display ="none";
      }
    }

    );


  }

  onDataChange(event: any) {
    this.page = event;
  }

  onSizeChange(event: any) {
    this.productSize = event.target.value;
    this.page = 1;
  }
  SreachText: string = "";

  onSearchTextEnterd(searchvalue: string) {
    this.SreachText = searchvalue.toLowerCase();

    console.log(this.SreachText);

    if (this.SreachText !== "") {
      this.Products =
        this.Products.filter((p) => p.name?.toLowerCase().includes(this.SreachText)) ||
        this.Products.filter((p) => p.description?.toLowerCase().includes(this.SreachText))


      console.log(this.Products);
    } else {
      this.isspener=true
      document.getElementById("pop")!.style.display ="block";
      this.productsService.GetAllProducts().subscribe((productlist) => {
        this.Products = productlist;
        if(this.Products !=null){
          this.isspener=false
          document.getElementById("pop")!.style.display ="none";
        }
      });
    }
  }
}
