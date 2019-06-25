import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './venue.page.html',
  styleUrls: ['./venue.page.scss'],
})
export class VenuePage implements OnInit {

  constructor(private router: Router) { }

  private activeButton;

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.activatedButton();
  }

  activatedButton() {
    return this.router.url;
    // console.log(this.router.url === '/tabs/venue');
  }

}
