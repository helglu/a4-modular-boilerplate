import {Component} from '@angular/core';
import {BAuthService} from "../../services/b.auth.service";

@Component({
  template: require('./b.login.component.html'),
})
export class BLoginComponent {

  private form:any = {}


  constructor(
    public authService: BAuthService) {
  }

  public login(form:any){
    this.authService.logIn(form);
  }
}
