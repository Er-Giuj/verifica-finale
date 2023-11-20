import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  constructor(private http: HttpClient) {}
  //corretta maniera di inizializzare e usare le APi visto che potrebbero essere molte lon=113.2&lat=23.1&ac=0&unit=metric&output=json&tzshift=0
  baseCoordUrl = "https://www.7timer.info/bin/astro.php?";
  baseSunUrl = "https://sunrisesunset.io/api/ ";
  searchByCoords(lon: string, lat: string) {
    return this.http.get(
      this.baseCoordUrl +
        "lon=" +
        lon +
        "&lat=" +
        lat +
        "&ac=0&unit=metric&output=json&tzshift=0"
    );
  }
  getSun(lat: string, lon: string) {
    // console.log(id);
    return this.http.get(this.baseSunUrl + "lat=" + lat + "&lng=" + lon);
  }
}
