import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map';


@Injectable()
export class GetData {
    private _url: string = "http://localhost:8080/webapi/login/signin";
    private _addUrl: string = "http://localhost:8080/webapi/login/signup"
    constructor(private _http: Http) { }

    getData(): any {
        return this._http.get(this._url)
            .map((response: Response) => response.json());
    }

    addUser(username: string, password: string, email: string): any {
        let headers = new Headers();
        console.log("in get data : ");
        return this._http.post(this._addUrl, { "username": username, "password": password, "email": email })
            .map((response: Response) => response.json());
    }
}