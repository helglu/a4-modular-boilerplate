import {RestService} from "../../app.common/services/rest.service";
import {Injectable} from "@angular/core";
/**
 * Created by Helena on 07.03.2017.
 */



@Injectable()
export class  BClientService {

  constructor(private restService: RestService) {

  }

  private dataPrefix:string = '/camunda/api/engine/engine/default/';

  public login(urlParams: string) {
    return this.restService.post('/camunda/api/admin/auth/user/default/login/tasklist',urlParams,{'Content-Type':'application/x-www-form-urlencoded'})
  }

}
