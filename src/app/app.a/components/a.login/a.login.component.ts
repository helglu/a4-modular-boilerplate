import {Component} from '@angular/core';
import {AAuthService} from "../../services/a.auth.service";

@Component({
  template: require('./a.login.component.html'),
})
export class ALoginComponent {

  constructor(
    public authService: AAuthService) {
  }

  public login(form:any){
    this.authService.logIn(form);
  }
}
