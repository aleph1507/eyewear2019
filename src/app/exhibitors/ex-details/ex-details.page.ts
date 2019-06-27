import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NavController} from '@ionic/angular';
import {ExhibitorsService} from '../exhibitors.service';

@Component({
  selector: 'app-ex-details',
  templateUrl: './ex-details.page.html',
  styleUrls: ['./ex-details.page.scss'],
})
export class ExDetailsPage implements OnInit {
  private exhibitor;

  constructor(
      private route: ActivatedRoute,
      private navCtrl: NavController,
      private exhibitorsService: ExhibitorsService
  ) { }

  initExDetails() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('exhibitorId')) {
        this.navCtrl.navigateBack('/tabs/exhibitors');
        return;
      }
      this.exhibitor = this.exhibitorsService.getExhibitor(+paramMap.get('exhibitorId'));
      this.exhibitor.title = this.addBRtoTitle(this.exhibitor.title);
      console.log('this.exhibitor.title: ', this.exhibitor.title);
    });
  }

  addBRtoTitle(title: string) {
    let tArray: Array<string>;
    if (title.length > 20) {
      tArray = title.split(' ');
      tArray.splice(tArray.length / 2, 0, '<br>');
      this.addBRtoTitle(tArray.join(' '));
    }
    return tArray;
  }

  ngOnInit() {
    this.initExDetails();
  }

  // ionViewWillEnter() {
    // console.log('ionViewWillEnter exhibitor: ', this.exhibitor);
    // this.route.paramMap.subscribe(paramMap => {
    //   if (!paramMap.has('exhibitorId')) {
    //     this.navCtrl.navigateBack('/tabs/exhibitors');
    //     return;
    //   }
    //   this.exhibitor = this.exhibitorsService.getExhibitor(+paramMap.get('exhibitorId'));
    // });
  // }

}
