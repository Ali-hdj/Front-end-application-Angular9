import { Component, OnInit } from '@angular/core';
import { utilisateurService } from '../services/service.utilisateur';
import { connexionService } from '../services/service.connexion';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-toutlespublications',
  templateUrl: './toutlespublications.component.html',
  styleUrls: ['./toutlespublications.component.scss']
})
export class ToutlespublicationsComponent implements OnInit {

  

  constructor(public monServiceUtilisateur:utilisateurService,private conextionUtilisateur : connexionService,private httpclient:HttpClient) { }


navigation;
base_url='http://localhost:3000';



  ngOnInit(): void {
    

   
   this.navigation=this.conextionUtilisateur.template;
   
  }

  isConnected()
  {
    return this.conextionUtilisateur.isConnected();
  }
}
