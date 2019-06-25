import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LangService {

  private _curLang = 'it';

  constructor() {
    this._curLang = this.detectLanguage();
  }

  get curLang() {
    return this._curLang;
  }

  detectLanguage = () =>  {
    const lang = navigator.language.split('-');
    // console.log('lang: ' + lang);
    let curLang = (lang[0]).toLocaleLowerCase();
    if (curLang !== 'it' && curLang !== 'en') {
      curLang = 'it';
    }
    if (document.location.search.indexOf('lang=') >= 0) {
      curLang = document.location.search.split('lang=')[1].split('&')[0];
    }
    return curLang.toLocaleUpperCase();
    // return 'it';
  }
}
