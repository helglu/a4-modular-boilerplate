import {TranslateService} from 'ng2-translate/ng2-translate';
import {Injectable,  Output, EventEmitter} from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class AppTranslateService {

  @Output() translationLoaded$: EventEmitter<any> = new EventEmitter();

  constructor(public translateService: TranslateService,
              private http: Http) {
    console.log('translate service initialised');
    translateService.setDefaultLang('cn');
    translateService.use('cn');
  }

  changeToLang(lang: string): void {
    this.translateService.use(lang);
  }

  //add translation strings from json located at server url
  addLangFromUrl(url: string, lang?: string) {

    if (!lang) {
      lang = this.translateService.currentLang;
    }

    this.http.get(url).subscribe(
      (data) => {
        let trans = data.json();
        console.log(trans);
        if (trans.add && typeof trans.add === 'object') {
          this.setTranslationFromObject(trans.add, lang);
        } else {
          this.setTranslationFromObject(trans, lang);
        }
        this.translationLoaded$.emit({
          url
        });
      },
      (error) => {
      }
    )
  }

  //local translation
  setTranslationFromObject(trObject: any, lang: string) {
    let keys = Object.keys(trObject);
    for (let key of keys) {
      let tr = trObject[key];
      if (typeof tr === 'string') {
        this.translateService.set(key, tr, lang);
      }
    }
  }

}
