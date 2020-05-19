import { Component, OnInit } from '@angular/core';
import { connexionService } from 'src/app/services/service.connexion';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  constructor(public connexion : connexionService) { }

  messagerie()
  {
   
    return this.connexion.messagerie;
  }

  ngOnInit(): void {
    this.connexion.getMessages();
  }

}
