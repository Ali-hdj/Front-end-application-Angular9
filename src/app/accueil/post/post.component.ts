import { Component, OnInit, Input } from '@angular/core';
import { connexionService } from 'src/app/services/service.connexion';
import { NgForm } from '@angular/forms';
import { utilisateurService } from 'src/app/services/service.utilisateur';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  constructor(private connexion:connexionService,private serviceUtilisateur :utilisateurService) { }

 @Input() post;

 repondre=false;

 onMessage()
 {
    this.serviceUtilisateur.stop=true;
   this.repondre=true;
 }
 
 onSubmit(message:NgForm)
 {
  var reponse={
    sujet:'REPONSE ANNONCE',
    id_destination:this.post.id_compte,
    contenu:message.value['contenu']
  }
  this.connexion.addMessage(reponse);

  this.serviceUtilisateur.stop=false;
  this.repondre=false;
 }

  ngOnInit(): void {
  }

  messageEnable(id)
  {

    return !(this.connexion.isConnected()&&this.connexion.id_compte!==id);
  }

  myPub(id)
  {
    return this.connexion.id_compte===id;
  }
}
