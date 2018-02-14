import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { UserService } from '../user.service';

@Injectable()
export class HomeService {

  constructor(
    public _http: Http,
    public _userService: UserService
  ) { }

  callGetService(url) {
    let headers = new Headers({'Content-Type':'application/json'});
    headers.append("Authorization","Bearer "+this._userService.getToken());
    let options = new RequestOptions({ headers: headers });
    return this._http.get(url, options); 
}

}
