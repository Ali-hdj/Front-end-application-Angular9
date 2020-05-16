import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { SeConnecterComponent } from './accueil/se-connecter/se-connecter.component';
import { InscriptionFormComponent } from './accueil/inscription-form/inscription-form.component';
import { RechercherComponent } from './accueil/rechercher/rechercher.component';
import { NavigationComponent } from './accueil/navigation/navigation.component';
import { FormsModule } from '@angular/forms';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { PostComponent } from './accueil/post/post.component';
import { InscriptionComponent } from './accueil/inscription/inscription.component';
import { ToutlespublicationsComponent } from './toutlespublications/toutlespublications.component';
import{connexionService} from "./services/service.connexion";
import{utilisateurService} from "./services/service.utilisateur";
import { AccueilConnexionComponent } from './accueil-connexion/accueil-connexion.component';
import { NavigationConnexionComponent } from './accueil-connexion/navigation-connexion/navigation-connexion.component';
import { NavigationMenuGaucheComponent } from './accueil-connexion/navigation-menu-gauche/navigation-menu-gauche.component';


@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    SeConnecterComponent,
    InscriptionFormComponent,
    RechercherComponent,
    NavigationComponent,
    PostComponent,
    InscriptionComponent,
    ToutlespublicationsComponent,
    AccueilConnexionComponent,
    NavigationConnexionComponent,
    NavigationMenuGaucheComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatProgressBarModule
   
  ],
  providers: [
    connexionService,
    utilisateurService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
