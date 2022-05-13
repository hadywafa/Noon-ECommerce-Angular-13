import { Rate } from "./../../../Core/Models/rate.enum";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductsService } from "src/app/Core/Services/products.service";
import { IProduct } from "src/app/Core/Models/iproduct";
import { Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from "@angular/core";
import { Subscription } from "rxjs";
import { ICategory } from "src/app/Core/Models/icategory";
import { ICartProduct } from "src/app/Core/Models/icart-product";
import { IwishList } from "src/app/Core/Models/iwish-list-";
import { WishListService } from "src/app/Core/Services/wish-list.service";
import { CartService } from "src/app/Core/Services/cart.service";
import { Iuser } from "src/app/Core/Models/iuser";
import Swal from "sweetalert2";
import { Ireview } from "src/app/Core/Models/ireview";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.scss"],
})
export class ProductDetailsComponent implements OnInit, OnChanges {
  //=============================================================Properties =================================================
  //#region Properties
  //product id
  productId: number = 0;
  selectedProductID!: number;
  //selected Prodeuct
  selectedProduct!: IProduct;
  productReviews!: Ireview[];
  maxCountArr: number[] = [];
  //main product image
  mainProImg!: string;
  //img gallery`
  proImgs: string[] = [];
  //product categories
  productCategories: ICategory[] = [];
  // last item in category
  lastCat!: ICategory;
  //product img
  proImg!: string;
  //style for product info
  isOverview!: boolean;
  isSpec!: boolean;
  isReview!: boolean;
  //Product Rating
  totalProductReviewRating!: number;
  totalProductReviewCount!: number;
  //Product Rating
  totalSellerReviewRating!: number;
  totalSellerReviewCount!: number;
  //destroy subscription
  sub!: Subscription[];

  //Mohamed Changes=============================>
  //Array Of ProductsId Quantity
  c!: Iuser;
  p!: IProduct;
  LocalStorageProducts: ICartProduct[] = [];
  ProductQuantity: number = 1;

  prod!: IProduct;
  //Kero Changes================================>
  CartProduct: ICartProduct = {
    quantity: 0,
    customer: this.c,
    product: this.p,
  };

  WishListProductLocalStorge: IwishList[] = [];

  //#endregion
  //===================================================Constructor + Lifecycle Hooks ========================================
  //#region Lifecycle Hooks
  constructor(
    private _productService: ProductsService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private wishService: WishListService,

    private _cartService: CartService
  ) {
    this.isOverview = true;
  }
  ngOnChanges(changes: SimpleChanges): void {}

  ngOnDestroy(): void {
    // this.sub.forEach((item) => {
    //   item.unsubscribe();
    // });
  }
  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((params) => {
      //fetch product id from url
      let proId = params.get("pid");
      if (proId != null) {
        this.selectedProductID = +proId;
      }
      this._productService.GetProductById(this.selectedProductID).subscribe((data) => {
        this.selectedProduct = data;

        this._productService.GetAllProductReviews(this.selectedProduct.id).subscribe((data) => {
          this.productReviews = data;
          this.totalProductReviewCount = this.productReviews.length;
          this.totalSellerReviewCount = this.productReviews.length;
          let _totalProductReviewRating = 0;
          let _totalSellerReviewRating = 0;
          //calculate total rating of product floor to 5
          for (let i = 0; i < this.productReviews.length; i++) {
            _totalProductReviewRating += (this.productReviews[i].productRating + 5) / 5;
            _totalSellerReviewRating += (this.productReviews[i].productRating + 5) / 5;
          }
          this.totalProductReviewRating = _totalProductReviewRating;
          this.totalSellerReviewRating = _totalSellerReviewRating;
        });

        this.productId = data.id;
        //set main product image
        this.mainProImg = this.selectedProduct.imageThumb;
        //push imageThum + all imageName of product image gallery to this.proImgs
        this.proImgs.push(this.selectedProduct.imageThumb);
        this.selectedProduct.imagesGallery.forEach((item) => {
          this.proImgs.push(item.imageName);
        });
        // maxCountArr == maxQuantityPerOrder
        for (let i = 1; i <= this.selectedProduct.maxQuantityPerOrder; i++) {
          this.maxCountArr.push(i);
        }

        if (localStorage.getItem("currentUser")) {
          this.wishService.getWishListItems().subscribe((Wishlistproducts) => {
            if (Wishlistproducts.find((w) => w.product.id == this.productId)) {
              this.isInwishlist = true;
            }
          });
        }
        this._productService.GetCategoryPath(this.selectedProduct.categoryId).subscribe((data) => {
          this.productCategories = data;
          this.lastCat = this.productCategories[this.productCategories.length - 1];
        });
        //get product categories
        this.productCategories = [...this.selectedProduct.parentsCategories]; //clone array
        // remove last element from array
        this.productCategories.pop();
        // last Catetory
        this.lastCat = this.selectedProduct.parentsCategories[this.selectedProduct.parentsCategories.length - 1];

        //==============================================================
        //Mohamed Changes
        //product img
        this.proImg = this.selectedProduct.imageThumb;
      });
    });
  }
  isInwishlist!: boolean;
  //#endregion
  //=============================================================Methods=====================================================
  //#region Methods
  goCatProducts(code: string) {
    this._router.navigate(["/egypt-en", code]);
  }

  showProInfo(ele: any) {
    if (ele.id === "overview") {
      this.isOverview = true;
      this.isSpec = false;
      this.isReview = false;
    }
    if (ele.id === "spec") {
      this.isOverview = false;
      this.isSpec = true;
      this.isReview = false;
    }
    if (ele.id === "review") {
      this.isOverview = false;
      this.isSpec = false;
      this.isReview = true;
    }
  }

  goFullSpecDetails() {
    this.isOverview = false;
    this.isSpec = true;
    this.isReview = false;
  }

  changeMainImage(ele: any) {
    // this.mainImg.nativeElement.src = ele.src;
    this.mainProImg = ele.src;
  }
  //=============================================================Mohamed Changes=====================================================
  //Add Product To LocalStorage/Database
  AddToCart() {
    if (localStorage.getItem("currentUser")) {
      this._cartService.addToCart(this.selectedProduct.id, this.ProductQuantity).subscribe(
        (next) => {},
        (err) => {
          console.log(err);
        },
        () => {
          Swal.fire("Product added to your cart", "Click the button to see you cart", "success").then(() => {
            this._router.navigateByUrl("/egypt-en/cart");
            this.ngOnInit(); // i love you
          });
        }
      );
    } else {
      this.CartProduct.product = this.selectedProduct;
      this.CartProduct.quantity = this.ProductQuantity;

      if (localStorage.getItem("LocalStorageProducts")) {
        this.LocalStorageProducts = JSON.parse(localStorage.getItem("LocalStorageProducts")!);

        if (this.LocalStorageProducts.find((p) => p.product.id == this.CartProduct.product.id)) return;

        this.LocalStorageProducts.push(this.CartProduct);
        localStorage.setItem("LocalStorageProducts", JSON.stringify(this.LocalStorageProducts));
      } else {
        this.LocalStorageProducts.push(this.CartProduct);

        localStorage.setItem("LocalStorageProducts", JSON.stringify(this.LocalStorageProducts));
        localStorage.setItem("LocalStorageProducts", JSON.stringify(this.LocalStorageProducts));
        localStorage.setItem("LocalStorageProducts", JSON.stringify(this.LocalStorageProducts));
      }
    }
  }

  AddToWishList() {
    console.log("add to wishlist");
    if (localStorage.getItem("currentUser")) {
      this.wishService.addToWishList(this.selectedProduct.id).subscribe(
        (next) => {},
        (err) => {
          console.log(err);
        },
        () => {
          Swal.fire("Product added to your Wish List", "Click the button to see you cart", "success").then(() => {
            this._router.navigateByUrl("/egypt-en/cart");
            this.ngOnInit(); // i love you
          });
        }
      );
    }
  }
  //#endregion
}
