import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { connexionService } from 'src/app/services/service.connexion';

@Component({
  selector: 'app-map-voisin',
  templateUrl: './map-voisin.component.html',
  styleUrls: ['./map-voisin.component.scss']
})
export class MapVoisinComponent implements OnInit {

  constructor(private connexion:connexionService) { }
  myIcon = L.icon({
    iconUrl: '/../../assets/images/mark.png'
  });
  
  att=50.6311634;
  lat=3.0599573
marker;
 map;
 rayon=10;

  position()
  {
    this.att+=0.001;
    var newLatLng = new L.LatLng(this.att,this.lat);
    this.marker.setLatLng(newLatLng); 
  }

  ngOnInit(): void {
 
    setTimeout(()=>{
   
alert("settime out")
this.map = L.map("mapVoisin").setView([this.connexion.mesVoisins[0].geo_x_att,this.connexion.mesVoisins[0].geo_y_latt], this.rayon+5);
   
    for(let v of this.connexion.mesVoisins)
    { 
      
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(this.map);
      this.marker=L.marker([v.geo_x_att,v.geo_y_latt],
         {icon: this.myIcon}).bindPopup(v.nom_utilisateur+v.Email_compte).addTo(this.map).openPopup();
    }
  },1000)
  
   
  }

}
