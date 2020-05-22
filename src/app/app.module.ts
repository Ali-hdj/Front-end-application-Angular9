import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
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
import { PublicationsComponent } from './accueil-connexion/publications/publications.component';
import { ProfileComponent } from './accueil-connexion/profile/profile.component';
import { MessagesComponent } from './accueil-connexion/messages/messages.component';
import { RendezVousComponent } from './accueil-connexion/rendez-vous/rendez-vous.component';
import { AnnoncesComponent } from './accueil-connexion/annonces/annonces.component';
import { VoisinsComponent } from './accueil-connexion/voisins/voisins.component';
import { ContratsComponent } from './accueil-connexion/contrats/contrats.component';
import { MapComponent } from './map/map.component';
import { MessageComponent } from './accueil-connexion/messages/message/message.component';
import { UnRendezVousComponent } from './accueil-connexion/rendez-vous/un-rendez-vous/un-rendez-vous.component';
import { UnContratComponent } from './accueil-connexion/contrats/un-contrat/un-contrat.component';
import { UnVoisinComponent } from './accueil-connexion/voisins/un-voisin/un-voisin.component';
import { UnePublicationComponent } from './accueil-connexion/annonces/une-publication/une-publication.component';


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
    NavigationMenuGaucheComponent,
    PublicationsComponent,
    ProfileComponent,
    MessagesComponent,
    RendezVousComponent,
    AnnoncesComponent,
    VoisinsComponent,
    ContratsComponent,
    MapComponent,
    MessageComponent,
    UnRendezVousComponent,
    UnContratComponent,
    UnVoisinComponent,
    UnePublicationComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatProgressBarModule,
    HttpClientModule
    
   
  ],
  providers: [
    connexionService,
    utilisateurService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
