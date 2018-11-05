import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable()
export class UserService {
    constructor(private http: HttpClient) {}

    public register(userName: string, userId: string, password: string) {
        return this.http.post(`https://backend-test-app.herokuapp.com/v1/authenticate/register`, {
            username: userName,
            password: password,
            userId: userId
        }).pipe(
            map(user => {
                return user;
            })
        )
    }
}