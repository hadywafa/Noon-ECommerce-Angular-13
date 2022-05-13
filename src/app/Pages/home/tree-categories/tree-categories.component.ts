import { Router } from "@angular/router";
import { ICategory } from "src/app/Core/Models/icategory";
import { ProductsService } from "src/app/Core/Services/products.service";
import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { NestedTreeControl } from "@angular/cdk/tree";
import { MatTreeNestedDataSource } from "@angular/material/tree";

@Component({
  selector: "app-tree-categories",
  templateUrl: "./tree-categories.component.html",
  styleUrls: ["./tree-categories.component.scss"],
})
export class TreeCategoriesComponent implements OnInit {
  treeCategoriesSource!: ICategory[];
  treeControl = new NestedTreeControl<ICategory>((node) => node.childrens);
  dataSource = new MatTreeNestedDataSource<ICategory>();
  constructor(private _router: Router, private _api: HttpClient, private _proService: ProductsService) {}
  hasChild = (_: number, node: ICategory) => !!node.childrens && node.childrens.length > 0;

  ngOnInit() {
    this._proService.getTreeCategories().subscribe(
      (data) => {
        this.treeCategoriesSource = data;
        this.dataSource.data = this.treeCategoriesSource;
        console.log(this.treeCategoriesSource);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  filterByCode(code: string) {
    this._router.navigate(["/egypt-en/", code]);
  }
}
