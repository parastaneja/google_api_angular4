import { Component } from '@angular/core';
import { GoogleApiService } from 'ng-gapi/lib/GoogleApiService';
import {UserService  } from "./user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(
    public userService: UserService
  ){ }

  isSignedIn() {
    return this.userService.isUserSignedIn();
  }

}
