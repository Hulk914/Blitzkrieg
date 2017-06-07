import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import { LoginComponent } from "./login/login.component";
import { FirstPage } from "./first-page/first-page.component";
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  imports:      [ BrowserModule, AppRoutingModule, ReactiveFormsModule],
  declarations: [ AppComponent, LoginComponent, FirstPage],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
