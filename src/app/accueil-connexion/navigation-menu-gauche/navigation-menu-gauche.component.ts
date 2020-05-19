import { Component, OnInit, Input } from '@angular/core';
import { connexionService } from 'src/app/services/service.connexion';

@Component({
  selector: 'app-navigation-menu-gauche',
  templateUrl: './navigation-menu-gauche.component.html',
  styleUrls: ['./navigation-menu-gauche.component.scss']
})

export class NavigationMenuGaucheComponent implements OnInit {

  constructor(private connexion:connexionService) { }

  @Input() affichages;

  ongletChoisi(onglet)
  {
  
    for(let i=0;i<this.affichages.length;i++)
        this.affichages[i]=false;
    
    this.affichages[onglet]=true;
  }

deconnexion()
{
  this.connexion.seDeconecter();
}

  ngOnInit(): void {
  }

  clk()
  {
    alert("bojour")
  }

}
