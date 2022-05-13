import { Component, Input, OnInit } from "@angular/core";
import { IProduct } from "src/app/Core/Models/iproduct";

@Component({
  selector: "app-specifications",
  templateUrl: "./specifications.component.html",
  styleUrls: ["./specifications.component.scss"],
})
export class SpecificationsComponent implements OnInit {
  @Input()
  chSelectedProduct!: IProduct;
  specTable1Count!: number;
  specTable1: any[] = [];
  specTable2Count!: number;
  specTable2: any[] = [];
  constructor() {}

  ngOnInit(): void {
    //intialize specTable1Count and specTable2Count
    this.specTable1Count = Math.ceil(this.chSelectedProduct.specifications.length / 2);
    this.specTable2Count = this.chSelectedProduct.specifications.length - this.specTable1Count;
    //fill spec table1 with chSelectedProduct.specifications.length/2
    for (let i = 0; i < this.specTable1Count; i++) {
      this.specTable1.push(this.chSelectedProduct.specifications[i]);
    }
    //fill spec table2 with chSelectedProduct.specifications.length/2
    for (let i = this.specTable2Count + 1; i < this.chSelectedProduct.specifications.length; i++) {
      this.specTable2.push(this.chSelectedProduct.specifications[i]);
    }
    console.log(this.specTable1Count);
    console.log(this.specTable2Count);
    console.log(this.specTable1);
    console.log(this.specTable2);
  }
}
