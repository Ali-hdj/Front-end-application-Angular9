import { Component, OnInit, Input } from '@angular/core';
import * as L from 'leaflet';
import { connexionService } from '../services/service.connexion';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
 
  constructor(private connexion:connexionService) { }
  myIcon = L.icon({
    iconUrl: '/../../assets/images/pnj.png'
  });
  
  att=this.connexion.att;
  lat=this.connexion.long;
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
