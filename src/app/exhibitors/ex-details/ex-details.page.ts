import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-ex-details',
  templateUrl: './ex-details.page.html',
  styleUrls: ['./ex-details.page.scss'],
})
export class ExDetailsPage implements OnInit {
  exhibitor;

  constructor(
      private route: ActivatedRoute,
      private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('exhibitorId')) {
        this.navCtrl.navigateBack('/tabs/exhibitors');
        return;
      }
      this.exhibitor = paramMap.get('exhibitorId');
    });
  }

}
