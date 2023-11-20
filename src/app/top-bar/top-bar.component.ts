import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-top-bar",
  templateUrl: "./top-bar.component.html",
  styleUrls: ["./top-bar.component.css"],
})
export class TopBarComponent implements OnInit {
  infoDrink: any = [];
  constructor() {}
  // getInfoDrink() {
  //   this.infoDrink = this.getInfoDrink();
  //   console.log(this.infoDrink);
  //   return this.infoDrink;
  // }
  ngOnInit(): void {
    // this.DrinkService.getInfoDrink(15200).subscribe((response: any) => {
    //   console.log(response);
    //   console.log(response.driks);
    //   this.infoDrink = response.drinks[0];
    //   // console.log(this.infoDrink);
    //   // console.log(this.infoDrink[0]);
    // });
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
