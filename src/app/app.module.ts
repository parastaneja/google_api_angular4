import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UserService } from './user.service';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HomeService } from './home/home.service';
import { HttpModule } from '@angular/http';

import { GoogleApiModule } from "ng-gapi/lib/GoogleApiModule";
import { GoogleApiConfig, NgGapiClientConfig } from "ng-gapi";
import { NG_GAPI_CONFIG } from "ng-gapi/lib/GoogleApiService";


let gapiClientConfig: NgGapiClientConfig = {
  client_id: "<<Client_id>>",
  discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"],
  scope: [
    "https://www.googleapis.com/auth/drive"
].join(" ")
};



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    GoogleApiModule.forRoot({
      provide: NG_GAPI_CONFIG,
      useValue: gapiClientConfig
    }),
  ],
  providers: [UserService,HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
