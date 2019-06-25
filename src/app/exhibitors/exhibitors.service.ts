import { Injectable } from '@angular/core';
import {Exhibitor} from './Exhibitor.model';

@Injectable({
  providedIn: 'root'
})
export class ExhibitorsService {
  private _exhibitors: Exhibitor[] = [
    new Exhibitor('Einstoffen', 'T10'),
    new Exhibitor('Eclipse Eyewear', 'L21'),
    new Exhibitor('Eyepetizer', 'I10'),
    new Exhibitor('Essedue Eyewear Handmande', 'B10'),
    new Exhibitor('Ainstoffen', 'T10'),
    new Exhibitor('Aclipse Eyewear', 'L21'),
    new Exhibitor('Ayepetizer', 'I10'),
    new Exhibitor('Assedue Eyewear Handmande', 'B10'),
  ];

  constructor() { }

  get exhibitors() {
    console.log(this._exhibitors);
    return this._exhibitors;
  }

  getExhibitor(name: string): Exhibitor {
    return {...this._exhibitors.find(
          ex => ex.name === name
      )};
  }

  getExhibitorsByFirst(first: string): Exhibitor[] {
    return {...this.exhibitors.filter(
        ex => ex.name[0] === first
      )};
  }

}
