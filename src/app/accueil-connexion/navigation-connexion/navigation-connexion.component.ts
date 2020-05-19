import { Component, OnInit } from '@angular/core';
import { connexionService } from 'src/app/services/service.connexion';

@Component({
  selector: 'app-navigation-connexion',
  templateUrl: './navigation-connexion.component.html',
  styleUrls: ['./navigation-connexion.component.scss']
})
export class NavigationConnexionComponent implements OnInit {

  constructor(private connexion:connexionService) { }

  ngOnInit(): void {
  }

  onDeconnexion()
  {
    this.connexion.seDeconecter();
  }

  isConnected()
  {
    return this.connexion.isConnected();
  }
}
