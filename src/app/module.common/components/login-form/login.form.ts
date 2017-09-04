import {Component, Input, Output, EventEmitter} from "@angular/core";
@Component({
  selector: 'login-form',
  templateUrl: '/login.form.html'
})
export class LoginFormComponent{
  @Input() title:string = ''
  @Output() loginAction:EventEmitter<LoginFormObject> = new EventEmitter<LoginFormObject>();

  private form:LoginFormObject = <LoginFormObject>{};

  public logInAction(form:LoginFormObject){
    this.loginAction.emit(form);
  }

}
