import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { MapService } from './app.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'tehran-health-path';
  constructor(private map: MapService) {}

  ngOnInit() {
    this.map.buildMap();
  }
}
