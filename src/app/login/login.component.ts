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
                else {
                    this.somethingWrong = true;
                    this.issueHandler();
                }
            });

    }

    issueHandler(): void {
        if (this.userForm.get('username').hasError('required'))
            this.msgs.push({ severity: 'warn', summary: 'USERNAME', detail: 'Please enter username.' });
        else if (this.userForm.get('username').hasError('minlength'))
            this.msgs.push({ severity: 'warn', summary: 'USERNAME', detail: 'Minimum 4 characters required.' });
        else if (this.userForm.get('password').hasError('required'))
            this.msgs.push({ severity: 'warn', summary: 'PASSWORD', detail: 'Password cannot be empty' });
        else
            this.msgs.push({ severity: 'error', summary: 'AUTHENTICATION', detail: 'Username or password mismatch.' });
        setTimeout(() => this.hide(), 5000);//growler should go automatically, this is failsafe.
        console.log("Something wrong : " + this.somethingWrong);
    }

    hide() {
        this.msgs = [];
    }
}