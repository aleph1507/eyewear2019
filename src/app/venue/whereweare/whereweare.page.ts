import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Environment, GoogleMap, GoogleMapOptions, GoogleMaps} from '@ionic-native/google-maps/ngx';
import {NavController, Platform} from '@ionic/angular';

@Component({
  selector: 'app-whereweare',
  templateUrl: './whereweare.page.html',
  styleUrls: ['./whereweare.page.scss'],
})
export class WherewearePage implements OnInit, AfterViewInit {
  @ViewChild('map') mapElement: ElementRef;
  public map: GoogleMap;
  // public coords = { latitude: }

  constructor(public navCtrl: NavController,
              private _googleMaps: GoogleMaps,
              public platform: Platform) { }

  async ngOnInit() {
    await this.platform.ready();
    await this.initMap();
  }

  ngAfterViewInit(): void {
    // this.platform.ready().then(() => {
    //   this.initMap();
    // });
    // this.initMap();
  }

  // ngAfterViewInit(): void {
  //   this.initMap();
  // }

  // ionViewDidLoad() {
  //   this.platform.ready().then(() => {
  //     this.initMap();
  //   });
  // }

  // initMap() {
    // const POSITION = { lat: }
  // }

  initMap() {
    Environment.setEnv({
      API_KEY_FOR_BROWSER_RELEASE: 'AIzaSyBTGwdVbOHGA8EZXv-jrEzOZOlzev552dI',
      API_KEY_FOR_BROWSER_DEBUG: 'AIzaSyBTGwdVbOHGA8EZXv-jrEzOZOlzev552dI'
    });

    const mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: 43.0741904,
          lng: -89.3809802
        },
        zoom: 18,
        tilt: 30
      }
    };

    const element = this.mapElement.nativeElement;
    this.map = GoogleMaps.create(element, mapOptions);
  }



}
