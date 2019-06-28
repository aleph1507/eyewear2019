import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Environment, GoogleMap, GoogleMapOptions, GoogleMaps} from '@ionic-native/google-maps';
import {NavController, Platform} from '@ionic/angular';

@Component({
  selector: 'app-whereweare',
  templateUrl: './whereweare.page.html',
  styleUrls: ['./whereweare.page.scss'],
})
export class WherewearePage implements OnInit {
  @ViewChild('map') mapElement: ElementRef;
  public map: GoogleMap;

  constructor(public navCtrl: NavController,
              private _googleMaps: GoogleMaps,
              public platform: Platform) { }

  ngOnInit() {
  }

  // ngAfterViewInit(): void {
  //   this.initMap();
  // }

  ionViewDidLoad() {
    this.platform.ready().then(() => {
      this.initMap();
    });
  }

  initMap() {
    Environment.setEnv({
      API_KEY_FOR_BROWSER_RELEASE: 'AIzaSyDdNT_6cELx5o9EonsF0amX2yWj0W-qjRs',
      API_KEY_FOR_BROWSER_DEBUG: 'AIzaSyDdNT_6cELx5o9EonsF0amX2yWj0W-qjRs'
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
