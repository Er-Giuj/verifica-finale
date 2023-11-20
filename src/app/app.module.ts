import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { HomeComponent } from "./home/home.component";
import { PageDetailComponent } from "./page-detail/page-detail.component";
import { TopBarComponent } from "./top-bar/top-bar.component";
import { HttpClientModule } from "@angular/common/http";
import { ApiService } from "./_services/api.service";
import { MeteoService } from "./_services/meteo.service";
@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    PageDetailComponent,
    TopBarComponent,
  ],
  providers: [ApiService, MeteoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
