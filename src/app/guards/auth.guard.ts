import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { BackendCallService } from "../services/backend-call.service";

import {User, AuthenticationService} from '../services/authentication.serivce';

@Injectable() 
export class AuthGuardService implements CanActivate {

    constructor(private router: Router, private backendService: BackendCallService,
        private auth: AuthenticationService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem('user')) {
            return true;
        } else {
            return false;
        }
        // localStorage.setItem( 'currentUser', JSON.stringify(currentUser)) ;
        return true;
      }
}