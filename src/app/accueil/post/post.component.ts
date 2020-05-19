import { Component, OnInit, Input } from '@angular/core';
import { connexionService } from 'src/app/services/service.connexion';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  constructor(private connexion:connexionService) { }

 @Input() post;

 

  ngOnInit(): void {
  }

  messageEnable()
  {
    return this.connexion.isConnected();
  }
}
