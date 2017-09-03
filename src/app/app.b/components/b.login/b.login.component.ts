import {Component} from '@angular/core';
import {BAuthService} from "../../services/b.auth.service";

@Component({
  template: require('./b.login.component.html'),
})
export class BLoginComponent {

  constructor(
    public authService: BAuthService) {
  }

  public login(event){
    var form:LoginFormObject = event.value;
    console.log('login data fetched', form);
    this.authService.logIn(form);
  }
}
