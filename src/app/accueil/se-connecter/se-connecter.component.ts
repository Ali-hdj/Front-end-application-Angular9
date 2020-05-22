import { Component, OnInit, Input } from '@angular/core';
import {NgForm} from '@angular/forms';
import {MatProgressBarHarness} from '@angular/material/progress-bar/testing/progress-bar-harness';
import { connexionService } from 'src/app/services/service.connexion';
import { Router } from '@angular/router';
@Component({
  selector: 'app-se-connecter',
  templateUrl: './se-connecter.component.html',
  styleUrls: ['./se-connecter.component.scss']
})
export class SeConnecterComponent implements OnInit {
  @Input() navigation;
  constructor(private connexion : connexionService,private route :Router) { }





  ngOnInit(): void {
   
  }

  isWait()
  {
return this.connexion.wait;
  }
 
onSubmit(form:NgForm)
{
  var connexionInfo={
    email :form.value['email'],
    mot_de_passe:form.value['motdepasse']
  }
  this.connexion.seConnecter(connexionInfo);

}
}
