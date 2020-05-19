import { Component, OnInit } from '@angular/core';
import { connexionService } from 'src/app/services/service.connexion';

@Component({
  selector: 'app-annonces',
  templateUrl: './annonces.component.html',
  styleUrls: ['./annonces.component.scss']
})
export class AnnoncesComponent implements OnInit {

  constructor(public connexion:connexionService) { }
  isReady=false;

  ngOnInit(): void {

    this.connexion.getPublication();
  //  this.isReady=this.connexion.isReady(4)
  }

  getPublication()
  {
    return this.connexion.annonces;
  }

}
