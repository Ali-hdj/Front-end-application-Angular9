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


  ngOnInit(): void {

    
  }

  isConnected()
  {
    return this.conextionUtilisateur.isConnected();
  }

  onSubmit(form:NgForm)
  {
   let  annonce={ idcategorie :form.value['categorie'],
                  prix :form.value['prix'],
                  contenu :form.value['post']
                }
    

            this.conextionUtilisateur.addPublication(annonce);
}

getPosts()
{
  return  this.monServiceUtilisateur.getPosts();
}
}
 /**ngIf="f.value['post'].length>=20"  *ngIf="f.value['categorie']!=0*/
