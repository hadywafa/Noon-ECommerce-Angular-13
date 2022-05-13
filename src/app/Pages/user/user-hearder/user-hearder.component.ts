import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-hearder',
  templateUrl: './user-hearder.component.html',
  styleUrls: ['./user-hearder.component.scss']
})

export class UserHearderComponent implements OnInit {
  localstorge:string
  constructor() { 
    this.localstorge = localStorage.getItem("lang")!;
  }

  ngOnInit(): void {
  }
  loclaztion(st:string){
    localStorage.setItem("lang", st);
    location.reload();
  }
}
