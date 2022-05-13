import { Component, OnInit } from "@angular/core";
// import shared module

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public SreachText:string="";
  onSearchTextEnterd(searchvalue:string){
  this.SreachText=searchvalue;
  console.log(this.SreachText)
  }
  getsaerch():string{
    return this.SreachText;
  }
}
