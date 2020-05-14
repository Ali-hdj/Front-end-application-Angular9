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

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    SeConnecterComponent,
    InscriptionFormComponent,
    RechercherComponent,
    NavigationComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatProgressBarModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
