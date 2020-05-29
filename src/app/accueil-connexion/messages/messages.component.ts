import { Component, OnInit } from '@angular/core';
import { connexionService } from 'src/app/services/service.connexion';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  constructor(public connexion : connexionService) { }

  messageRecu=false;

  messageFlip()
  {
    if(this.messageRecu)
    {this.connexion.getMessagesR()}
    else
    {
      this.connexion.getMessages()
      
    }

    this.messageRecu=!this.messageRecu;

  }
  messagerie()
  {
   
    return this.connexion.messagerie;
  }


  ngOnInit(): void {
    this.connexion.getMessagesR();
  }

  addMessage(form :NgForm)
  {

  }
}
