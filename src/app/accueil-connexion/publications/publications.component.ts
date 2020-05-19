import { Component, OnInit } from '@angular/core';
import { utilisateurService } from 'src/app/services/service.utilisateur';
import { connexionService } from 'src/app/services/service.connexion';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss']
})
export class PublicationsComponent implements OnInit {

  constructor(private monServiceUtilisateur:utilisateurService,private conextionUtilisateur : connexionService) { }

posts;
  ngOnInit(): void {
    this.posts=this.monServiceUtilisateur.getPosts();
  }

  isConnected()
  {
    return this.conextionUtilisateur.isConnected();
  }

  onSubmit(form:NgForm)
  {

  }
}
