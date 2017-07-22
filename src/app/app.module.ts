import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from "./login/login.component";
//import { HomePage } from "./home-page/home-page.component";
import { HomePageModule } from "./home-page/home-page.module";
import { AppRoutingModule } from "./app-routing.module";
import { HttpModule } from "@angular/http";
import { GetData } from "./services/get-data.component";
import { GrowlModule } from "primeng/primeng";

@NgModule({
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, HttpModule, GrowlModule, HomePageModule],
  declarations: [AppComponent, LoginComponent/*, HomePage*/],
  bootstrap: [AppComponent],
  providers: [GetData]
})
export class AppModule { }
