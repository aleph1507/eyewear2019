import { Injectable } from '@angular/core';
import {Exhibitor} from './Exhibitor.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExhibitorsService {
  private _exhibitors: Exhibitor[] = [];
  //   new Exhibitor('2358', '001 EYEWEAR', {true, '', L, 'C.SO CASTELFIDARDO 30/A - 10129 TORINO - ITALIA', 3497236243, '', 'info@011eyewear.com', 'www.011eyewear.com', M20, 'TESTORE GROUP SRL - 011EYEWEAR', '', MILLENNIALS}),
  //   new Exhibitor('Eclipse Eyewear', 'L21'),
  //   new Exhibitor('Eyepetizer', 'I10'),
  //   new Exhibitor('Essedue Eyewear Handmande', 'B10'),
  //   new Exhibitor('Ainstoffen', 'T10'),
  //   new Exhibitor('Aclipse Eyewear', 'L21'),
  //   new Exhibitor('Ayepetizer', 'I10'),
  //   new Exhibitor('Assedue Eyewear Handmande', 'B10'),
  // ];

  private _alphabet: Array<string> = [];

  constructor(private http: HttpClient) { }

  get exhibitors(): Exhibitor[] | Observable<Exhibitor[]> {
    if (this._exhibitors.length === 0) {
      return this.http.get<Exhibitor[]>('https://dateyewear.com/wp-admin/admin-ajax.php?action=get_all_exhibitors');
    }
    console.log(this._exhibitors);
    return this._exhibitors.slice();
  }

  getExhibitor(id: number): Exhibitor {
    return {...this._exhibitors.find(
          ex => ex.id === id
      )};
  }

  setExhibitors(exs: Exhibitor[]) {
    this._exhibitors = exs;
  }

  getExhibitorsByFirst(first: string): Exhibitor[] {
    return this._exhibitors.filter(ex => ex.title[0] === first).slice();
    // return {...this.exhibitors.filter(
    //     ex => ex.name[0] === first
    //   )};
  }

  setAlphabet() {
    console.log('setAlphabet()');
    this._exhibitors.forEach((ex: Exhibitor) => {
      if (this._alphabet.indexOf(ex.title[0]) === -1) {
        this._alphabet.push(ex.title[0]);
      }
    });
    this._alphabet.sort();
  }

  get alphabet(): Array<string> {
    if (this._alphabet.length === 0) { this.setAlphabet(); }
    return this._alphabet;
  }

}
