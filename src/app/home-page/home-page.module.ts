import { NgModule } from '@angular/core';
import { HomePage } from "./home-page.component";
import { InputTextModule } from "primeng/primeng";

@NgModule({
    imports:[InputTextModule],
    declarations:[HomePage],
    providers:[]
})
export class HomePageModule { }