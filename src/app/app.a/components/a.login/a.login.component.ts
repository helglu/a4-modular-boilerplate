import {Component} from '@angular/core';
import {AAuthService} from "../../services/a.auth.service";

@Component({
  template: require('./a.login.component.html'),
})
export class ALoginComponent {

  constructor(
    public authService: AAuthService) {
  }

  public login(event){
    var form:LoginFormObject = event.value;
    console.log('login data fetched', form);
    this.authService.logIn(form);
  }
}
