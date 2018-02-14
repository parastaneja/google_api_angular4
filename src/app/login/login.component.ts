import {Component} from "@angular/core";
import {UserService} from "../user.service";

@Component({
    selector: 'login-form',
    templateUrl: './login.component.html',
})
export class LoginComponent {

    constructor(private userService: UserService) {
    }

    public signIn() {
        this.userService.signIn();
    }
}