import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { connexionService } from '../services/service.connexion';


@Component({
  selector: 'app-accueil-connexion',
  templateUrl: './accueil-connexion.component.html',
  styleUrls: ['./accueil-connexion.component.scss']
})
export class AccueilConnexionComponent implements OnInit {

  constructor(private route:Router,private connexion:connexionService) { 


  }

  affichages=[true,false,false,false,false,false,false];


  ngOnInit(): void {

  if(!this.connexion.isConnected())
  {
    this.route.navigate(['/']);
  }

  

 
  

  
  }

}
