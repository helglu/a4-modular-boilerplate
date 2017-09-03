import {RestService} from "../../app.common/services/rest.service";
import {Injectable} from "@angular/core";
import {CommonConfigService} from "../../app.common/services/config.service";
/**
 * Created by Helena on 07.03.2017.
 */



@Injectable()
export class  BClientService {

  constructor(private restService: RestService,
              private commonConfigService: CommonConfigService) {

  }

  private baseUrl = this.commonConfigService.commonValues.apiBaseUrls.baseUrl;
  
  public hello() {
    return this.restService.get( this.baseUrl+'/hello');
  }
}
