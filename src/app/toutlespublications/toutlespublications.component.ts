import { Component, OnInit } from '@angular/core';
import { utilisateurService } from '../services/service.utilisateur';
import { connexionService } from '../services/service.connexion';

@Component({
  selector: 'app-toutlespublications',
  templateUrl: './toutlespublications.component.html',
  styleUrls: ['./toutlespublications.component.scss']
})
export class ToutlespublicationsComponent implements OnInit {
  posts;

  constructor(private monServiceUtilisateur:utilisateurService,private conextionUtilisateur : connexionService) { }


navigation;

  ngOnInit(): void {
    this.posts=this.monServiceUtilisateur.getPosts();

   
   this.navigation=this.conextionUtilisateur.template;
   
  }

  isConnected()
  {
    return this.conextionUtilisateur.isConnected();
  }
}
