import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navigation-menu-gauche',
  templateUrl: './navigation-menu-gauche.component.html',
  styleUrls: ['./navigation-menu-gauche.component.scss']
})

export class NavigationMenuGaucheComponent implements OnInit {

  constructor() { }

  @Input() affichages;

  ongletChoisi(onglet)
  {
  
    for(let i=0;i<this.affichages.length;i++)
        this.affichages[i]=false;
    
    this.affichages[onglet]=true;
  }



  ngOnInit(): void {
  }

  clk()
  {
    alert("bojour")
  }

}
