/**
 * Created by Helena on 07.03.2017.
 */

import {Injectable} from "@angular/core";
import {RestService} from "../../app.common/services/rest.service";


@Injectable()
export class  AClientService {

  constructor(private restService: RestService) {

  }

  private dataPrefix:string = '/camunda/api/engine/engine/default/';

  public login(urlParams: string) {
    return this.restService.post('/camunda/api/admin/auth/user/default/login/tasklist',urlParams,{'Content-Type':'application/x-www-form-urlencoded'})
  }

  public getGroupRoles(userId:string) {
    return this.restService.get('/engine-rest/group?member='+userId,{});
  }




}
