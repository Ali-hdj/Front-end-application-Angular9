import { Component, OnInit } from '@angular/core';
import { connexionService } from 'src/app/services/service.connexion';

@Component({
  selector: 'app-voisins',
  templateUrl: './voisins.component.html',
  styleUrls: ['./voisins.component.scss']
})
export class VoisinsComponent implements OnInit {

  constructor(public connexion:connexionService) { }
voisins;
  ngOnInit(): void {
   this.voisins= this.connexion.getVoisins();
  }

getVoisins()
{
  return this.connexion.voisins;
}

}
