import {AHomeComponent} from "../app.a/components/a.home/a.home.component";
import {AAuthService} from "../app.a/services/a.auth.service";
import {ALoginComponent} from "../app.a/components/a.login/a.login.component";
/**
 * Created by Helena on 24.01.2017.
 */

export const A_ROUTES = [

  { path: 'a-login',      component: ALoginComponent },
  { path: 'a-home',  component: AHomeComponent, canActivate: [AAuthService] },

];
