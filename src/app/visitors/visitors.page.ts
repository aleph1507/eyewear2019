import {Component, OnInit, SecurityContext} from '@angular/core';
import {LangService} from '../lang.service';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-tab3',
  templateUrl: 'visitors.page.html',
  styleUrls: ['visitors.page.scss']
})
export class VisitorsPage implements OnInit {

  private iframeHref;

  constructor(private langService: LangService, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.iframeHref = this.sanitizer.bypassSecurityTrustResourceUrl('http://dateyewear.gwcworld.com/mobileform?lang='
        + this.langService.curLang);
  }

  // iframeUrl() {
  //   return this.sanitizer.bypassSecurityTrustResourceUrl(this.iframeHref);
  // }

}
