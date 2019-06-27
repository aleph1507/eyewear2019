import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Exhibitor} from './Exhibitor.model';
import {ExhibitorsService} from './exhibitors.service';
import {Observable} from 'rxjs';
import {LoadingController} from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'exhibitors.page.html',
  styleUrls: ['exhibitors.page.scss']
})
export class ExhibitorsPage implements OnInit {
  @ViewChild('exhibitorsList', {read: ElementRef}) private exList;
  @ViewChild('search', {read: ElementRef}) private search;
  public exhibitors: Exhibitor[];
  public displayedExhibitors: Exhibitor[];
  private loaded = false;
  private fuzzySearchString = '';

  public alphabet: Array<string>; // = this.createAlphabetArray();

  public selectedLetter; // = this.alphabet[0];

  slideOpts = {
    initialSlide: 0,
    speed: 400,
    slidesPerView: 9
  };

  constructor(private exhibitorsService: ExhibitorsService, private loadingCtrl: LoadingController) {}

  ngOnInit(): void {
    if (this.exhibitorsService.exhibitors instanceof Observable) {
      this.loaded = false;
      const ePreprocess = this.exhibitorsService.exhibitors;
      this.loadingCtrl.create({
        // message: '',
        spinner: 'lines'
      }).then (loadingEl => {
        loadingEl.present();
        ePreprocess.subscribe((res: Exhibitor[]) => {
          this.exhibitors = res;
          this.exhibitorsService.setExhibitors(this.exhibitors);
          this.displayedExhibitors = this.exhibitorsService.getExhibitorsByFirst('A');
          this.alphabet = this.exhibitorsService.alphabet;
          this.selectedLetter = 'A';
          this.loaded = true;
          loadingEl.dismiss();
        }, error => {
          this.exList.nativeElement.innerHTML = '<ion-item>There has been an error fetching the Exhibitor data</ion-item>';
          this.loaded = true;
          loadingEl.dismiss();
        });
      });
    } else {
      this.loaded = true;
      this.exhibitors = this.displayedExhibitors = this.exhibitorsService.exhibitors;
      this.alphabet = this.exhibitorsService.alphabet;
      this.selectedLetter = this.alphabet[0];
    }
    // typeof this.exhibitorsService.exhibitors === Observable<Exhibitor[]> ?
    //     this.exhibitorsService.exhibitors.subscribe();
    // this.exhibitors = this.exhibitorsService.exhibitors;
    // this.displayedExhibitors = this.exhibitors;
    // this.alphabet = this.createAlphabetArray();
    // this.alphabet = this.exhibitorsService.alphabet;
    // this.selectedLetter = this.alphabet[0];

    // console.log(this.alphabet);
  }

  createAlphabetArray(): Array<string> {
    const alphabet: Array<string> = [];
    this.exhibitors.forEach((ex: Exhibitor) => {
      if (alphabet.indexOf(ex.title[0]) === -1) {
        alphabet.push(ex.title[0]);
      }
    });
    return alphabet.sort();
    // const alphabet: Set<string> = new Set<string>();
    // this.exhibitors.forEach((ex: Exhibitor) => {
    //   alphabet.add(ex.name[0].toLocaleUpperCase());
    // });
    // return new Set<string>([...alphabet.entries()].map((entry) => entry[0]).sort());
    // return alphabet;


    // return Array.apply(null, {length: 26})
    //     .map((x, i) => String.fromCharCode(65 + i));
  }

  selectLetter(letter: string) {
    this.selectedLetter = letter;
    this.displayedExhibitors = this.exhibitorsService.getExhibitorsByFirst(this.selectedLetter);
  }

  onSearch(inputString: string) {
    this.displayedExhibitors = this.exhibitors.filter(ex =>  ex.title.toLowerCase().includes(inputString.toLowerCase()));
  }

}
