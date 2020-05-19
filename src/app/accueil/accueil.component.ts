import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'Rxjs/Rx';
import { utilisateurService } from '../services/service.utilisateur';
import { connexionService } from '../services/service.connexion';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  constructor(private monServiceUtilisateur:utilisateurService,private connexionsrv :connexionService,private route:Router) { 
    
  }
connexion=false;
inscription=false;

navig=this;
images=['diy0.jpg','diy1.jpg','diy3.jpg'];



//images=['blue','green','black'];
 i=0;

posts;
  ngOnInit(): void {

    if(this.connexionsrv.isConnected())
    {
      this.route.navigate(['/accueil-utilisateur']);
     
    }

    this.connexionsrv.template=this;
    
    this.posts=this.monServiceUtilisateur.getPosts();
    /* changer l'arriere plan chaque 5 secondes */
    const conter = Observable.interval(5000);
    conter.subscribe(()=> 
    {
     this.i++;
     if(this.i>2) this.i=0;
    });
}

getImage()
{
  return 'url(\'/../assets/images/'+this.images[this.i]+'\')';
}

onConnexion()
{
  this.connexion=true;
}

onInscription()
{
  this.inscription=true;
}
onConnexionClose()
{
  this.connexion=false;
}
onInscriptionClose()
{
  this.inscription=false;
}

}
