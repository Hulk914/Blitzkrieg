import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map';


@Injectable()
export class GetData {
    private _url: string = "http://localhost:8080/webapi/myresource/json";
    constructor(private _http: Http) { }
    getData():  any {
        return this._http.get(this._url)
            .map((response: Response) => response.json());
    }
}