import { Component } from "@angular/core";
import { Router } from '@angular/router';
import { FormControl, FormGroup, AbstractControl } from "@angular/forms";
@Component({
    selector: 'login',
    templateUrl: './login.html',
    styleUrls: ['./login.css']
})

export class LoginComponent {
    userForm = new FormGroup({
        username: new FormControl(),
        password: new FormControl()
    })

    constructor(private router: Router){}
    func():void {
        console.log("here");
        this.router.navigate(['/firstPage']);
    }
    
}