import {Component, OnInit} from '@angular/core';
import {Exhibitor} from './Exhibitor.model';
import {ExhibitorsService} from './exhibitors.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'exhibitors.page.html',
  styleUrls: ['exhibitors.page.scss']
})
export class ExhibitorsPage implements OnInit {
  public exhibitors: Exhibitor[];

  public alphabet = this.createAlphabetArray();

  public selectedLetter = this.alphabet[0];

  slideOpts = {
    initialSlide: 0,
    speed: 400,
    slidesPerView: 9
  };

  constructor(private exhibitorsService: ExhibitorsService) {}

  ngOnInit(): void {
    this.exhibitors = this.exhibitorsService.exhibitors;
  }

  createAlphabetArray(): Array<string> {
    return Array.apply(null, {length: 26})
        .map((x, i) => String.fromCharCode(65 + i));
  }

  selectLetter(letter: string) {
    this.selectedLetter = letter;
  }

}
