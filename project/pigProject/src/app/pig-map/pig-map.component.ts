import { HttpClient } from '@angular/common/http';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { icon, Marker } from 'leaflet';
const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41],
});
Marker.prototype.options.icon = iconDefault;

@Component({
  selector: 'app-pig-map',
  templateUrl: './pig-map.component.html',
  styleUrls: ['./pig-map.component.css'],
})
export class PigMapComponent implements AfterViewInit {
  private map: any;
  @Input() lat: HTMLInputElement | null;
  @Input() lng: HTMLInputElement | null;
  @Input() coords: any;

  constructor(private httpClient: HttpClient) {
    console.log('inside map');
    console.log(this.coords);
  }

  ngAfterViewInit(): void {
    this.map = L.map('mapid').setView([49.2, -123], 11);
    const lat = this.lat;
    const lng = this.lng;

    function onMapClick(e: any) {

      if (lat && lng) {
        lat.value = e.latlng.lat;
        lng.value = e.latlng.lng;
        
      }
    }

    this.map.on('click', onMapClick);

    L.tileLayer(
      'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYmhha3RpYjEiLCJhIjoiY2xheW1uZmlqMHEwZzNvcW9hcmZqdnp3MiJ9.1hLjcIGb4RTk-jTEEr5c4g',
      {
        maxZoom: 11,
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
          'Imagery Â© <a href="https://www.mapbox.com/">Mapbox</a>',
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
      }
    ).addTo(this.map);

    // L.marker([49.2276, -123.0076])
    //   .addTo(this.map)
    //   .bindPopup('<b>Metrotown</b><br />cases reported.')
    //   .openPopup();

    console.log('inside markup');
    this.httpClient
      .get<Object>(
        'https://272.selfip.net/apps/CL1mgrxtHC/collections/pigs/documents/'
      )
      .subscribe((data: any) => {
        console.log(data);
        console.log('yoyoy');
        this.coords = data;
        console.log(this.coords);
        for (let i = 0; i < Object.keys(this.coords).length; i++) {
          console.log('inside markup');
          L.marker([
            this.coords[i].data.Lalocation,
            this.coords[i].data.Lolocation,
          ])
            .addTo(this.map)
            .bindPopup('Cases reported')
            .openPopup();
        }
      });

    console.log(this.coords[1].data.Lalocation);
    // L.marker([49.1867, -122.849])
    //   .addTo(this.map)
    //   .bindPopup('<b>SFU Surrey</b><br />cases reported.')
    //   .openPopup();
  }


  display(){
    console.log("this is location")
    console.log(this.coords);
  }


}
