import { Component, OnInit } from "@angular/core";
import { MeteoService } from "../_services/meteo.service";

@Component({
  selector: "app-page-detail",
  templateUrl: "./page-detail.component.html",
  styleUrls: ["./page-detail.component.css"],
})
export class PageDetailComponent implements OnInit {
  infoMeteo: any = [];
  lat: string = "";
  lon: string = "";
  constructor(private meteoService: MeteoService) {}
  // getInfoDrink() {
  //   this.infoDrink = this.getInfoDrink();
  //   console.log(this.infoDrink);
  //   return this.infoDrink;
  // }
  ngOnInit(): void {
    this.meteoService
      .getInfoSun(this.lat, this.lon)
      .subscribe((response: any) => {
        console.log(response);
        console.log(response.driks);

        this.infoMeteo = response.drinks[0];
        // console.log(this.infoDrink);
        // console.log(this.infoDrink[0]);
      });
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
