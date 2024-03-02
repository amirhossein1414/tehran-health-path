import { Injectable } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class MapService {
  lat = 35.7219;
  lng = 51.3347;
  zoom = 8;

  //

  constructor() {}
  buildMap() {
    const map = new mapboxgl.Map({
      accessToken: environment.mapbox.accessToken,
      container: 'map',
      style: 'http://127.0.0.1:8080/styles/basic-preview/style.json'/*  'mapbox://styles/mapbox/streets-v11' */,
      zoom: this.zoom,
      center: [this.lng, this.lat],
      dragPan: true,
    });

    
    map.addControl(new mapboxgl.NavigationControl());
  }
}
