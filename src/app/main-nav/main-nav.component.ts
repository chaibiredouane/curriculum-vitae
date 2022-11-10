import { Component, Input } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {TranslateService} from "@ngx-translate/core";
import { Language } from '../model/language.model';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})

export class MainNavComponent {
  languages: Language[]  = [];
  currentLanguage?: Language;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private translate: TranslateService) {
    this.languages.push({code: "en", name:'English', path: '../../assets/images/flags/GB.png'});
    this.languages.push({code: "fr", name:'French ', path: '../../assets/images/flags/FR.png'});
    this.languages.push({code: "ar", name:'Arabic', path: '../../assets/images/flags/DZ.png'});
    console.log(JSON.stringify(this.languages));
    
    this.currentLanguage = this.languages.find(x => x.code == 'en');
    this.setLanguage();
  }

  getLanguages(): Language[] {
    return this.languages;
  }

  change(){
    this.translate.setDefaultLang('fr');
    this.translate.use('fr');
  }

  setLanguage(){
    this.translate.use(this.currentLanguage?.code ?? 'en');
  }

  switchLangStatic(lang: Language) {
    this.currentLanguage = lang;
    this.setLanguage();
}

}
