import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";

@Injectable({
  providedIn: "root",
})
export class MeteoService {
  constructor(private apiService: ApiService) {}
  // component:
  //  drinkService.getElencoDrinks
  //  	apiService.searchByF
  //  		http.get
  //Ecco cosa succede quando faccio la ricerca per lettera
  getInfoCity(lon: string, lat: string) {
    return this.apiService.searchByCoords(lon, lat);
  }
  getInfoSun(lat: string, lon: string) {
    return this.apiService.getSun(lat, lon);
  }
}
