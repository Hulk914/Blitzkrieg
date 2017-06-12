import { Component } from "@angular/core";
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { GetData } from "../services/get-data.component";
import { Message } from "primeng/primeng";

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
    msgs: Message[] = [];

    userForm: FormGroup;
    somethingWrong: boolean;
    constructor(private router: Router, private fb: FormBuilder, private getDataV: GetData) {
        this.somethingWrong = false;
        this.createForm();
    }

    createForm() {
        this.userForm = this.fb.group({
            username: ['', [Validators.required, Validators.minLength(4)]],
            password: ['', Validators.required]
        })
    }

    loggedIn(): void {
        console.log("here");
        this.getDataV.getData()
            .subscribe((resUser: any) => {
                console.log(resUser);
                console.log(this.userForm.value);
                if (this.userForm.value.username == resUser.username && this.userForm.value.password == resUser.password) {
                    this.router.navigate(['/firstPage']);
                    this.somethingWrong = false;
                }
                else
                    this.somethingWrong = true;
                this.msgs.push({ severity: 'error', summary: 'Login Failed', detail: 'Incorrect Credentials' });
                setTimeout(() => this.hide(), 3000);//growler should go automatically, this is failsafe.
                console.log("Something wrong : " + this.somethingWrong);
            });

    }
    hide() {
        this.msgs = [];
    }
}