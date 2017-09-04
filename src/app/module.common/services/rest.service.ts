/**
 * Created by Helena on 01.02.2017.
 */

// Imports
import {Injectable}     from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {CommonConfigService} from './config.service'
import {TranslateService} from "ng2-translate/index";
import {MessagesService} from "../components/messages/messages.service";
import {LoaderService} from "../components/loader/loader.service";

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class RestService {
  constructor(private http:Http,
              private commonConfigService:CommonConfigService,
              private messagesService:MessagesService,
              private loaderService:LoaderService,
              private translateService:TranslateService) {
    console.log('rest service initialised');
  }

  private withCredentials: boolean = false;


  public post(url:string, body:any, options = {}, showLoader = true) {

    var headers = new Headers({});
    this.resolveContentType(headers, options);
    this.compileAcceptHeaders(headers,options);

    showLoader ? this.loaderService.show() : {};

    //noinspection TypeScriptValidateTypes
    return this.http
      .post(url, body, {headers: headers, withCredentials: this.withCredentials})
      .map((response)=> response.json())
      .do(()=> {
        showLoader ? this.loaderService.hide() : {};
      })
      .catch((error:any) => this.showResponseError(error, showLoader)); //handle errors

  }

  public put(url:string, body:any, options = {}, showLoader = true) {

    var headers = new Headers({});
    this.resolveContentType(headers, options);
    this.compileAcceptHeaders(headers,options);

    showLoader ? this.loaderService.show() : {};

    //noinspection TypeScriptValidateTypes
    return this.http
      .put(url, body, {headers: headers, withCredentials: this.withCredentials})
      .map((response)=> response.json())
      .do(()=> {
        showLoader ? this.loaderService.hide() : {};
      })
      .catch((error:any) => this.showResponseError(error, showLoader)); //handle errors

  }

  public get(url:string, options = {}, showLoader = true) {

    var headers = new Headers({});
    this.resolveContentType(headers, options);
    this.compileAcceptHeaders(headers, options);

    showLoader ? this.loaderService.show() : {};

    //noinspection TypeScriptValidateTypes
    return this.http
      .get(url, {withCredentials: this.withCredentials})
      .map((response) => response.json())
      .do(
        ()=> {
          showLoader ? this.loaderService.hide() : {};
        }
      )
      .catch((error:any) => this.showResponseError(error, showLoader)); //handle errors
  }

  protected showResponseError(response, showLoader) {

    console.log("response", response);

    if (response.status) {
      if (response.status === 304) {
        this.messagesService.showInfoMessageCode('errors.http.304');
      } else if (response.status === 401) {
        if (this.isThisLoginScreen()) {
          this.messagesService.showDangerMessageCode('errors.unauthorized');
        } else {
          this.messagesService.showDangerMessageCode('errors.http.401');
          //TODO process notifying auth service
        }
      } else if (response.status === 504) {
        this.messagesService.showDangerMessageCode('errors.http.504');
      } else {
        let message = this.translateService.instant("errors.http.error_response") + response.status;
        this.messagesService.showDangerMessage(message);
      }
    } else {
      this.messagesService.showDangerMessageCode('errors.http.connection_error');
    }

    showLoader ? this.loaderService.hide() : {};

    return Observable.throw(response);
  }

  private isThisLoginScreen() {
    let initUnauthUrl = window.location.href.toString().split(window.location.host)[1];
    if (initUnauthUrl.indexOf('login')>-1) {
      return true;
    }
    return false;
  }

  private resolveContentType(headers, options) {


    if (options["Content-Type"]) {
      headers.set("Content-Type",options["Content-Type"]);
      console.log("adding header", headers);
    }
    else {
      headers.set("Content-Type",this.commonConfigService.commonValues.defaultHeaders["Content-Type"]);
      // console.log("default header", headers);
    }
  }


  private compileAcceptHeaders(headers,options) {

    if (this.commonConfigService.commonValues.defaultHeaders["Accept"]) {
      headers.set("Accept",this.commonConfigService.commonValues.defaultHeaders["Accept"]);
    }

    if (options["Accept"]) {
      headers.append("Accept", options["Accept"]);
      console.log("adding accept header", headers);
    }



  }

}
