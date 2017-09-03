/**
 * Created by Helena on 07.03.2017.
 */

import {Injectable} from "@angular/core";
import {RestService} from "../../app.common/services/rest.service";
import {CommonConfigService} from "../../app.common/services/config.service";


@Injectable()
export class  AClientService {

  constructor(private restService: RestService, 
              private commonConfigService: CommonConfigService) {

  }

  private baseUrl = this.commonConfigService.commonValues.apiBaseUrls.baseUrl;


  public hello() {
    return this.restService.get( this.baseUrl+'/hello');
  }



}
