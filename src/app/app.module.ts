import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from "./login/login.component";
import { FirstPage } from "./first-page/first-page.component";
import { AppRoutingModule } from "./app-routing.module";
import { HttpModule } from "@angular/http";
import { GetData } from "./services/get-data.component";

@NgModule({
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, HttpModule],
  declarations: [AppComponent, LoginComponent, FirstPage],
  bootstrap: [AppComponent],
  providers: [GetData]
})
export class AppModule { }
