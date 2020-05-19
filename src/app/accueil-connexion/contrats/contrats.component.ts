import { Component, OnInit } from '@angular/core';
import { connexionService } from 'src/app/services/service.connexion';

@Component({
  selector: 'app-contrats',
  templateUrl: './contrats.component.html',
  styleUrls: ['./contrats.component.scss']
})
export class ContratsComponent implements OnInit {

  constructor(public connexion :connexionService) { }

  ngOnInit(): void {
    this.connexion.getContrats();
  }

  getContrats()
  {
    return this.connexion.contrats;
  }
}
