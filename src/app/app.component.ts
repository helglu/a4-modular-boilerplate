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
import {AppTranslateService} from "./module.common/services/translation.service";
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
  public name = 'Angular 4 modular boilerplate';
  public url = 'https://github.com/helglu/a4-modular-boilerplate';

  constructor(
    public appState: AppState,
    public translate: TranslateService,
    public appTranslateService: AppTranslateService) {
    console.log('appComponent constructor launched: environment: ',process.env, process);
  }

  public ngOnInit() {
    this.translate.setDefaultLang('en');
    this.appTranslateService.changeToLang('en');
    console.log('Initial App State', this.appState.state);
  }

}
