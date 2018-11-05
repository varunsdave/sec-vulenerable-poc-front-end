import { Component, OnInit } from '@angular/core';
import { AuthenticationService, User } from 'src/app/services/authentication.serivce';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { BackendCallService } from 'src/app/services/backend-call.service';

import {first} from 'rxjs/operators';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  currentUser: User;
  currentUserSubscription: Subscription;
  users: User[] = [];
  data: string;
  weakData: string;
  constructor(
      private authenticationService: AuthenticationService,
      private router: Router,
      private _backEndService: BackendCallService
  ) {
      // this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
      //     this.currentUser = user;
      // });
  }

  ngOnInit() {
      this.loadAllUsers();
      this.data = '';
      this.weakData = '';
      this.currentUser = JSON.parse(localStorage.getItem('user'));
  }

  ngOnDestroy() {
      // unsubscribe to ensure no memory leaks
    //   this.currentUserSubscription.unsubscribe();
  }

  deleteUser(id: number) {
      // this.userService.delete(id).pipe(first()).subscribe(() => {
      //     this.loadAllUsers()
      // });
  }

  private loadAllUsers() {
      // this.userService.getAll().pipe(first()).subscribe(users => {
      //     this.users = users;
      // });
  }

  logout() {
    localStorage.clear();
    this.router.navigateByUrl('');
  }

    
  clickButton() {
    this._backEndService.getBackendData('').
    pipe(first()).subscribe(res => {
      // console.log(JSON.stringify(res));
      this.data = res.token;
    })
  }

  weakSecurityButton() {
    this._backEndService.getBackendDataWeak().
    pipe(first()).subscribe(res => {
      // console.log(JSON.stringify(res));
      this.weakData = res.token;
    })
  }


}
