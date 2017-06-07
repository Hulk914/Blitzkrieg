import { Component } from "@angular/core";
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
@Component({
    selector: 'login',
    templateUrl: './login.html',
    styleUrls: ['./login.css']
})

export class LoginComponent {
    /*userForm = new FormGroup({
        username: new FormControl(),
        password: new FormControl()
    })*/
    userForm: FormGroup;
    somethingWrong: boolean;
    constructor(private router: Router, private fb: FormBuilder) {
        this.somethingWrong = false;
        this.createForm();
    }

    createForm() {
        this.userForm = this.fb.group({
            username: ['', [Validators.required,Validators.minLength(4)]],
            password: ['', Validators.required]
        })
    }

    loggedIn(): void {
        console.log("here");
        console.log(this.userForm.value);
        if (this.userForm.value.username == "Ayush" && this.userForm.value.password == "Ayush") {
            this.router.navigate(['/firstPage']);
            this.somethingWrong = false;
        }
        else
            this.somethingWrong = true;
        console.log(this.somethingWrong);
    }

}