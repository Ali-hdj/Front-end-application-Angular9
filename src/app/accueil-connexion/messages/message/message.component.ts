import { Component, OnInit, Input } from '@angular/core';
import { connexionService } from 'src/app/services/service.connexion';

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

}
