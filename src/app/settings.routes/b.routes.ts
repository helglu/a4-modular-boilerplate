/**
 * Created by Helena on 24.01.2017.
 */
import {BHomeComponent} from "../app.b/components/b.home/b.home.componen";
import {BLoginComponent} from "../app.b/components/b.login/b.login.component";
import {BAuthService} from "../app.b/services/b.auth.service";

export const B_ROUTES = [
  { path: 'b-login', component: BLoginComponent },
  { path: 'b-home', component:BHomeComponent, canActivate: [BAuthService]  }
];
