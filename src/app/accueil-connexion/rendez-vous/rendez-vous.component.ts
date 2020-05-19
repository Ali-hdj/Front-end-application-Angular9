import { Component, OnInit } from '@angular/core';
import { connexionService } from 'src/app/services/service.connexion';

@Component({
  selector: 'app-rendez-vous',
  templateUrl: './rendez-vous.component.html',
  styleUrls: ['./rendez-vous.component.scss']
})
export class RendezVousComponent implements OnInit {

  constructor(public connexion :connexionService) { }

  ngOnInit(): void {
    this.connexion.getRendez_vous();
  }


  getRendez_vous()
  {
    return this.connexion.rendez_vous;
  }

}
