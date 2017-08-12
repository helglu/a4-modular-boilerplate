import {Injectable} from '@angular/core';

var lodash = require('lodash');

if (process.env.ENV) {
  var env = process.env.ENV;

  //import configuration regarding to module build - all for development
  if (env === 'production-a') {
    var appAConfig = require('../../app.a/configuration/a.config.json');
  }
  if (env === 'production-b') {
    var appAConfig = require('../../app.b/configuration/b.config.json');
  } else if (env == 'development') {
    var appAConfig = require('../../app.a/configuration/a.config.json');
    var appBConfig = require('../../app.b/configuration/b.config.json');
  }

  var commonConfig = require('../../app.common/configuration/common.config.json');

} else {
  console.log('FATAL ERROR - cannot find build mode!!');
}

@Injectable()
export class CommonConfigService {

  public commonValues:CommonConfigInterface;
  public appAValues:AConfigInterface;
  public appBValues:BConfigInterface;

  constructor() {
    if (appAConfig) {
      this.appAValues = Object.assign({}, appAConfig);
    }
    if (appBConfig) {
      this.appBValues = Object.assign({}, appBConfig);
    }
    this.commonValues = Object.assign({}, commonConfig);

    console.log('ConfigService: configuration available', this.commonValues, this.appAValues, this.appBValues);
  }


  // getConfig(url:string, body:any):Observable<any> {
  //   return this.http.post(url, body)
  //     .map(this.extractData).json()
  //     .catch(this.handleError);
  // }

  //TODO use rest API to call for it

  // extractData(res:Response) {
  //   let body = res.json();
  //   return body || {};
  // } //TODO rewrite
  //
  // handleError(error:any) {
  //   let errMsg = (error.message) ? error.message : '服务器出错';
  //   console.error(errMsg);
  //   return Observable.throw(errMsg);
  // } //TODO rewirte

}
