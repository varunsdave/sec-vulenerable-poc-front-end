import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {map} from 'rxjs/operators';

@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient) {}

    login(username: string, password: string) {
        return this.http.post<User>(`https://backend-test-app.herokuapp.com/v1/authenticate`, {
            username: username,
            password: password
        }).pipe(
            map(user => {
                if (user && user.token) {
                    localStorage.setItem('token', user.token);
                    localStorage.setItem('userId', user.userId);
                    localStorage.setItem('user', JSON.stringify(user));
                }
                return user;
            })
        )
    }

    logout() {
        localStorage.removeItem('currentUser');
    }

    isAuthenticated() {
        if (localStorage.getItem('user')) {
            return true;
        } else {
            return false;
        }
    }
}

export interface User {
    token: string;
    userId: string;
    userName: string;
}