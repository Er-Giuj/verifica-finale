import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  // styleUrls: ["../../style.css"],
})
export class AppComponent implements OnInit {
  // Nuova parte,Utilizzo servizi http
  // -------------------------------------------------------------------------------
  // non lasciare mai la tipizzazione 'any', deve essere di tipizzazione 'Fatture[]' che è un interfaccia di tipizzazione
  drinks: any = [];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
/*
  class CarelloService{
    private prodotti:Prodotti[]=[];
    private totale = 0;

    aggiungiProdotto(prodotto:Prodotto){
      this.prodotti.push(prodotto);
      this.totale += prodotto.prezzo + prodotto.quantita;
    }
    eliminaProdotto(prodotto:Prodotto){}
    cambiaQUantita(idProdotto:string, nuovaQuantita:number){}
    svuotaCarello(){}
    getProdotti(){return this.prodotti}
    getTotale(){
      return this.totale;
    }
    ricarcolaTotale(){}
  }
*/
