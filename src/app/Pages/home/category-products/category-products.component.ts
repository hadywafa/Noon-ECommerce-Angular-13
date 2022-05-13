import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { IProduct } from "src/app/Core/Models/iproduct";
import { ProductsService } from "src/app/Core/Services/products.service";

@Component({
  selector: "app-category-products",
  templateUrl: "./category-products.component.html",
  styleUrls: ["./category-products.component.scss"],
})
export class CategoryProductsComponent implements OnInit {
  selectedCatCode!: string;
  Products: IProduct[] = [];
  page: number = 1;
  count: number = 0;
  productSize: number = 20;
  productSizes: any = [5, 10, 15, 20];
  localstorge: string = "en";
  categoriesJson: any = [];
  isspener:boolean=true
  constructor(private activeRout: ActivatedRoute, private productsService: ProductsService) {
    if (localStorage.getItem("lang")) this.localstorge = localStorage.getItem("lang")!;
  }

  ngOnInit(): void {
    this.activeRout.paramMap.subscribe((paramMap) => {
      this.selectedCatCode = paramMap.get("cCode")!; //must be returned
      this.productsService
        .GetProductsByCatCode(this.selectedCatCode)
        .subscribe((productlist) =>{
           (this.Products = productlist)
           if(this.Products !=null){
            this.isspener=false
            document.getElementById("pop")!.style.display ="none";
          }
          });
    });
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
    this.SreachText = searchvalue;

    console.log(this.SreachText);

    if (this.SreachText !== "") {
      console.log(this.SreachText);
      this.Products =
        this.Products.filter((p) => p.name?.toLowerCase().includes(this.SreachText)) ||
        this.Products.filter((p) => p.description?.toLowerCase().includes(this.SreachText));
    } else {
      this.productsService.GetAllProducts().subscribe((productlist) => {
        this.Products = productlist;
      });
    }
  }
}
