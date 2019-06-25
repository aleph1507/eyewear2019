import {Component, OnInit} from '@angular/core';
import {LangService} from '../lang.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'main.page.html',
  styleUrls: ['main.page.scss']
})
export class MainPage implements OnInit{

  private contentClass = 'main-en';

  constructor(private langService: LangService) {}

  ngOnInit(): void {
    this.contentClass = 'main-' + this.langService.curLang.toLocaleLowerCase();
  }

}
