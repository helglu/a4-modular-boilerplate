import {Component} from '@angular/core';
import {AAuthService} from "../../services/a.auth.service";
import {LoginFormObject} from "../../../app.common/components/login-form/login.form.object.d.ts";

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
