import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from "@angular/core";
import { Router } from "@angular/router";
import { IProduct } from "src/app/Core/Models/iproduct";

@Component({
  selector: "app-overview",
  templateUrl: "./overview.component.html",
  styleUrls: ["./overview.component.scss"],
})
export class OverviewComponent implements OnInit {
  // fetch selected product from parent
  @Input()
  chSelectedProduct!: IProduct;

  @Output() eventFullSpecDetails = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}
  goFullSpecDetailsHandler() {
    this.eventFullSpecDetails.emit();
  }
}
