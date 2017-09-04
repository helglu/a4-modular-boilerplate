import {CanActivate, Router}    from '@angular/router';
import {Injectable} from "@angular/core";
import {MessagesService} from "../../module.common/components/messages/messages.service";
import {CommonConfigService} from "../../module.common/services/config.service";


var _ = require("lodash");

@Injectable()
export class BAuthService implements CanActivate {

  private userId:string = undefined;

  private isLoggedIn:boolean = false;
  private initUnauthUrl:string;

  public authID:string = this.configService.appBValues.appCookies.appAuthCookie;

  constructor(private router:Router,
              private messagesService:MessagesService,
              private configService: CommonConfigService) {
    console.log("app B auth service initialised")
    console.log(this.configService.appAValues, this.configService.appBValues)
  }

  public logIn(loginForm:any) {
    if (loginForm.username === "appB") {
      console.log('user logged in!')
      this.userId = loginForm.username;
      this.isLoggedIn = true;
      if (window.localStorage) {
        window.localStorage.setItem(this.authID, this.userId);
      }
      if(this.initUnauthUrl) {
        console.log('navigating for oringinal url')
        this.router.navigate([this.initUnauthUrl]);
      } else {
        this.router.navigate(['b-home']);

      }

    } else {
      this.isLoggedIn = false;
      this.messagesService.addMessageFromMessageCode({
        type: 'info',
        message: 'wrong passwor or username!'
      });
    }

  }


  canActivate() {
    let userId = "";

    if (window.localStorage) {
      userId = window.localStorage.getItem(this.authID);
    }
    if (!(userId == null) && !(userId === '')) {

      this.isLoggedIn = true;
      this.userId = userId;
    }

    if (!this.isLoggedIn) {
      this.initUnauthUrl = window.location.href.toString().split(window.location.host)[1];
      this.router.navigate(['b-login']);
    }
    console.log("BAuthService: canActivate performed");
    return this.isLoggedIn;

  }

  logout() {

    if(window.localStorage) {
      window.localStorage.removeItem(this.authID);
    }
    this.userId = undefined;
    this.isLoggedIn = false;
    this.router.navigate(['b-login']);
  }


}
