import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToutlespublicationsComponent } from './toutlespublications/toutlespublications.component';
import { AccueilComponent } from './accueil/accueil.component';


const routes: Routes = [
  {path : 'tout-les-publications' , component : ToutlespublicationsComponent },
  {path : '' , component : AccueilComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
