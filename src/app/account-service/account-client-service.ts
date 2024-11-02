import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable({
providedIn: 'root'
})
export class AccountClientService {
    constructor(private http: HttpClient) { }
    getApi(url: string) {
        return this.http.get(url);
    }

    postApi(url: string, postData: any) {
        return this.http.post(url, postData);
    }

    putApi(url: string, postData: any) {
        return this.http.post(url, postData);
    }

    delApi(url: string) {
        return this.http.get(url);
    }

    postAccountApi(url: string, postData: any, p0: { responseType: string; }) {
        return this.http.post(url, postData);
    }

}