import { Component } from "@angular/core";
import { OnInit } from "@angular/core";

@Component({
    selector: 'home-page',
    templateUrl: './home-page.html',
    styleUrls: ['./home-page.css']
})

export class HomePage implements OnInit{
    username:string; 
    arr: string[];
    constructor(){
        this.arr=["Carousal1","Carousal1","Carousal1","Carousal1","Carousal1","Carousal1"];
    }
    ngOnInit(){
        this.username=localStorage.getItem('username');
        console.log("in home "+this.username);
    }

}