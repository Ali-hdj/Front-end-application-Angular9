import { Component, OnInit } from '@angular/core';
import{Input} from '@angular/core';
import { connexionService } from 'src/app/services/service.connexion';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent implements OnInit {
  @Input() navigation;
  constructor(private connexion : connexionService) { }
  
  ngOnInit(): void {
  }
isConnected()
{
  return this.connexion.isConnected();
}
}
