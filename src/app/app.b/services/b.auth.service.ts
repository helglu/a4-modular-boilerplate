import {CanActivate, Router}    from '@angular/router';
import {Injectable} from "@angular/core";
import {MessagesService} from "../../app.common/components/messages/messages.service";
import {CommonConfigService} from "../../app.common/services/config.service";
import {BClientService} from "./b.client.service";

var _ = require("lodash");

@Injectable()
export class BAuthService implements CanActivate {


  private displayRights: {
    op:boolean;
    history:boolean;
    menu:boolean;
    admin:boolean;
    af:boolean;
    all:boolean;
    ce: boolean;
  } = {
    op:false,
    history:false,
    menu:false,
    admin:false,
    af:false,
    all:false,
    ce: false,
  };

  private userId:string = undefined;

  private isLoggedIn:boolean = false;
  private initUnauthUrl:string;

  public authID:string = this.configService.appBValues.appCookies.appAuthCookie;

  private logoutTimer:any;

  constructor(private router:Router,
              private apiClient:BClientService,
              private messagesService:MessagesService,
              private configService: CommonConfigService) {
    console.log("app B auth service initialised")
  }

  public logIn(loginForm:any) {
    if (loginForm.username === "appA") {
      this.userId = loginForm.username;
      this.isLoggedIn = true;
      if (window.localStorage)
        window.localStorage.setItem(this.authID, this.userId);
      else {
        this.setCookie(this.authID, this.userId);
      }
    } else {
      this.isLoggedIn = true;
      this.messagesService.addMessageFromMessageCode({
        type: 'info',
        message: 'wrong passwor or username!'
      });
    }

  }

  private setCookie(name:string, value:string):void {
    let Days = 7;
    let exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + value + ";expires=" + exp.toUTCString();
  }

  private getCookie(name):any {
    let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg))
      return arr[2];
    else
      return null;
  }

  public delCookie(name):void {
    let exp = new Date();
    exp.setTime(exp.getTime() - 1);
    let cval = this.getCookie(name);
    if (cval != null)
      document.cookie = name + "=" + cval + ";expires=" + exp.toUTCString();
  }


  canActivate() {
    let userId = "";

    if(window.localStorage)
      userId = window.localStorage.getItem(this.authID);
    else{
      userId = this.getCookie(this.authID);
    }

    if (!(userId == null) && !(userId === '')) {

      this.isLoggedIn = true;
      this.userId = userId;

    } else {
      console.log("ERROR userId is", userId);
    }

    if (!this.isLoggedIn) {
      this.initUnauthUrl = window.location.href.toString().split(window.location.host)[1];
      this.router.navigate(['/b-login']);
    }
    console.log("tasklistAuthService: canActivate performed");
    return this.isLoggedIn;

  }

  logout() {

    if(window.localStorage)
      window.localStorage.removeItem(this.authID);
    else{
      this.delCookie(this.authID);
    }

    this.userId = undefined;
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }



}
