import { Routes, RouterModule } from '@angular/router';

//module routes
import { A_ROUTES } from "./settings.routes/a.routes"
import { B_ROUTES } from "./settings.routes/b.routes"
import {DEV_ROUTES} from "./settings.routes/dev.routes";
import {NoContentComponent} from "./module.common/components/no.content/common.no-content.component";

export const ROUTES: Routes = generatePaths();

function generatePaths() {
  let env = process.env.ENV;
  let NO_CONTENT_PATH = [
    { path: '**', component: NoContentComponent }
  ];

  if (env === 'development') {
    return [ //all routes accessible for development
      { path: '', redirectTo: '/dev-dashboard', pathMatch: 'full' },
      ...DEV_ROUTES,
      ...A_ROUTES,
      ...B_ROUTES,
      ...NO_CONTENT_PATH
    ];
  } else if (env === 'production-a') {
    return [
      { path: '', redirectTo: '/a-home', pathMatch: 'full' },
      ...A_ROUTES,
      ...NO_CONTENT_PATH
    ]
  } else if (env === 'production-b') {
    return [
      { path: '', redirectTo: '/b-home', pathMatch: 'full' },
      ...B_ROUTES,
      ...NO_CONTENT_PATH
    ]
  }
}

