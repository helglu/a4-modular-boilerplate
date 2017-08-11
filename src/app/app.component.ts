/*
 * Angular 2 decorators and services
 */
import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { AppState } from './app.service';
import { TranslateService } from 'ng2-translate';
import { AppTranslateService } from "./app.common/services/translation.service";
/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.css',
  ],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  public angularclassLogo = 'assets/img/msxf-logo.svg';
  public name = 'Angular 2.4 Luma Front end core';
  public url = 'https://www.msxf.com/';

  constructor(
    public appState: AppState,
    public translate: TranslateService,
    public appTranslateService: AppTranslateService) {
    console.log('appComponent constructor launched: envrionment: ',process.env, process);
  }

  public ngOnInit() {
    this.translate.setDefaultLang('en');
    this.appTranslateService.changeToLang('en');
    console.log('Initial App State', this.appState.state);
  }

}
