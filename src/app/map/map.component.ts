import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor() { }
  myIcon = L.icon({
    iconUrl: '/../../assets/images/pnj.png'
  });
  
  att=50.6311634;
  lat=3.0599573
marker;
 map;
  position()
  {
    this.att+=0.001;
    var newLatLng = new L.LatLng(this.att,this.lat);
    this.marker.setLatLng(newLatLng); 
  }
  ngOnInit(): void {
    this.map = L.map("map").setView([this.att, this.lat], 12);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);
    this.marker=L.marker([this.att, this.lat], {icon: this.myIcon}).bindPopup('vous etes ici').addTo(this.map).openPopup();
  }

}
