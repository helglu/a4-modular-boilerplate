import {AppTranslateService} from "../app.common/services/translation.service";
import {CommonConfigService} from "../app.common/services/config.service";
import {RestService} from "../app.common/services/rest.service";
import {LoaderService} from "../app.common/components/loader/loader.service";
import {MessagesService} from "../app.common/components/messages/messages.service";
/**
 * Created by Helena on 30.01.2017.
 */



export const COMMON_PROVIDERS = [
  AppTranslateService, //i18n service
  MessagesService,
  CommonConfigService,
  RestService,
  LoaderService
]
