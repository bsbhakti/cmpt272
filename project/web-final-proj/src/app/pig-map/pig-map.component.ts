import { HttpClient } from '@angular/common/http';
import {
  Component,
  Injector,
  Input,
  OnChanges,
  OnInit,
  Optional,
  ViewChild,
} from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { ControlContainer, FormGroup } from '@angular/forms';
import * as L from 'leaflet';

import { icon, Marker } from 'leaflet';
const iconRetinaUrl = '../../assets/marker-icon-2x.png';
const iconUrl = '../../assets/marker-icon-2x.png';
const shadowUrl = '../../assets/marker-shadow.png';
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
  private map: L.Map;
  @Input() lat: HTMLInputElement | null;
  @Input() lng: HTMLInputElement | null;
  @Input() form: FormGroup | null;
  @Input() coords: any;
  @ViewChild('map') mapContainer: any;
  constructor(
    private httpClient: HttpClient,
    @Optional() private controlContainer: ControlContainer,
    private injector: Injector
  ) {
    console.log('inside map');
  }

  ngOnInit(): void {
    try {
      if (this.controlContainer === null) return;
      console.log('inside init');
      this.form = <FormGroup>this.controlContainer.control;
    } catch (e) {
      console.log(e);
    }
  }


  ngAfterViewInit(): void {
    try {
      this.map = L.map(this.mapContainer.nativeElement).setView(
        [49.2, -123],
        11
      );

      console.log('HURRAY!');
      const lat = this.lat;
      const lng = this.lng;
      const form = this.form;
      function onMapClick(e: any) {
        if (lat && lng) {
          lat.value = e.latlng.lat;
          lng.value = e.latlng.lng;

          if (form === null || form === undefined) return;

          form.patchValue({
            Lalocation: e.latlng.lat,
            Lolocation: e.latlng.lng,
            name: form.value.name,
            number: form.value.number,
            notes: form.value.notes,
            pigID: form.value.pigID,
          });
        }
      }

      this.map.on('click', onMapClick);

      L.tileLayer(
        'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYmhha3RpYjEiLCJhIjoiY2xheW1uZmlqMHEwZzNvcW9hcmZqdnp3MiJ9.1hLjcIGb4RTk-jTEEr5c4g',
        {
          maxZoom: 11,
          attribution:
            'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
            'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
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
          console.table(data);
          console.log('yoyoy');
          this.coords = data;
          console.log(this.coords);
          const countMap = new Map();
          for (const element of data) {
            console.log('Bruh: ', element);
            const address = element.data.address;
            if (countMap.has(address)) {
              countMap.set(address, countMap.get(address) + 1);
            } else {
              countMap.set(address, 1);
            }
          }
          for (let i = 0; i < data.length; i++) {
            //Count the number of pigs in each location

            L.marker([
              this.coords[i].data.Lalocation,
              this.coords[i].data.Lolocation,
            ])
              .addTo(this.map)
              .bindPopup(
                countMap.get(this.coords[i].data.address) +
                  ' Cases reported here'
              )
              .openPopup();
          }
          console.log('countMap: ', countMap);
        });
    } catch (e) {
      console.warn('Error in map : ', e);
    }


  }
  display() {
    console.log('this is location');
    console.log(this.coords);
  }
}
