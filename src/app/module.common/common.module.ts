import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {RestService} from "./services/rest.service";
import {CommonConfigService} from "./services/config.service";
import {MessagesService} from "./components/messages/messages.service";
import {MessagesComponent} from "./components/messages/messages.component";
import {AppTranslateService} from "./services/translation.service";
import {LoginFormComponent} from "./components/login-form/login.form";
import {NoContentComponent} from "./components/no.content/common.no-content.component";
import {TranslateModule} from "ng2-translate";
import {TranslateLoader} from 'ng2-translate';
import {TranslateStaticLoader} from 'ng2-translate';
import {Http} from '@angular/http';
import {LoaderBasicComponent} from "./components/loader/loader.component";
import {ModalWrapper} from "./components/modal-wrapper/common.modal-wrapper.component";
import {LoaderService} from "./components/loader/loader.service";

var appBaseUrl = '';
if (process.env.BASE_URL) {
  appBaseUrl = process.env.BASE_URL;
}


@NgModule({
  imports:[
    CommonModule,
    FormsModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (http: Http) => new TranslateStaticLoader(http, appBaseUrl + '/assets/i18n', '.json'),
      deps: [Http]
    }), ],
  declarations: [
    MessagesComponent, LoginFormComponent, NoContentComponent, LoaderBasicComponent,
    ModalWrapper
  ],
  exports:      [
    MessagesComponent,
    LoginFormComponent,
    NoContentComponent,
    LoaderBasicComponent,
    ModalWrapper

  ],
  providers:[
    RestService,
    CommonConfigService,
    MessagesService,
    AppTranslateService,
    LoaderService
   ]
})
export class AppCommonModule { }
