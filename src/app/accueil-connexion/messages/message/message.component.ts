import { Component, OnInit, Input } from '@angular/core';
import { connexionService } from 'src/app/services/service.connexion';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  constructor(private connexion :connexionService) { }

  @Input() message;

  active=true;
  repondre=false;
  ngOnInit(): void {
  }

  onRepondre()
  {
    this.repondre=true;
  }

  onAnnuler()
  {
    this.repondre=false;
    this.active=true;
  }

  onSupprimer()
  {
    this.active=false;

  }
  onSubmit(f:NgForm)
  {
   
    var reponse={
      sujet:'RE'+this.message.sujet,
      id_destination:this.message.id_compte,
      contenu:f.value['contenu']
    }
    this.connexion.addMessage(reponse);
  }
}
