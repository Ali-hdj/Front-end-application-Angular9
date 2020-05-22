import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { connexionService } from 'src/app/services/service.connexion';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {
  @Input() navigation;

  constructor(private connexion:connexionService) { }

wait=false;
  ngOnInit(): void {
  }

onSubmit(form:NgForm)
{
  console.log("ok essai ...");
  alert('submit')
  var inscription={
    nom : form.value['nom'],
    prenom:form.value['prenom'],
    email:form.value['email'],
    codepostale:form.value['codepostale'],
    rue:form.value['rue'],
    password:form.value['password'],
    tel:form.value['tel']
  }

  this.connexion.creerCompte(inscription);
this.wait=true;

}
}
