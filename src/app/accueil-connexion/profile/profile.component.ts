import { Component, OnInit } from '@angular/core';
import { connexionService } from 'src/app/services/service.connexion';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(public connexion : connexionService) {


   }

  
  ngOnInit(): void {

    this.connexion.getProfile();
  }

}
