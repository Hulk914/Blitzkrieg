import { NgModule } from '@angular/core';
import { HomePage } from "./home-page.component";
import { CarouselModule } from "primeng/primeng";
import { CommonModule } from "@angular/common";

@NgModule({
    imports:[CarouselModule, CommonModule],
    declarations:[HomePage],
    providers:[]
})
export class HomePageModule { }