import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToutlespublicationsComponent } from './toutlespublications/toutlespublications.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AccueilConnexionComponent } from './accueil-connexion/accueil-connexion.component';


const routes: Routes = [
  {path : 'tout-les-publications' , component : ToutlespublicationsComponent },
  {path : 'accueil-utilisateur' , component : AccueilConnexionComponent },
  {path : '' , component : AccueilComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
