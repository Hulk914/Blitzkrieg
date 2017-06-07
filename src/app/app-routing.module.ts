import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "../app/login/login.component";
import { FirstPage } from "../app/first-page/first-page.component";

const routes: Routes = [
   
    { path: 'firstPage', component: FirstPage },
    { path: 'login', component: LoginComponent},
    { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }