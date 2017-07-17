import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map';


@Injectable()
export class GetData {
    private _url: string = "http://localhost:8080/webapi/login/signin";
    private _add_url: string = "http://localhost:8080/webapi/login/signup";
    constructor(private _http: Http) { }

    getData(username: string, password: string): any {
        let login_url = "";
        login_url = this._url + "/" + username + "/" + password;
        console.log("login_url" + login_url);
        return this._http.get(login_url)
            .map((response: Response) => {
                if (response.status == 404)
                    throw new Error('Authentication issue' + response.status);
                return response.json();
            });
    }

    addUser(username: string, password: string, email: string): any {
        console.log("in get data : ");
        return this._http.post(this._add_url, { "username": username, "password": password, "email": email })
            .map((response: Response) => response.json());
    }
}