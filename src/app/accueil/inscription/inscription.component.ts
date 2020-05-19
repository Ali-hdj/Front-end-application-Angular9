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

  constructor() { }

wait=false;
  ngOnInit(): void {
  }

onSubmit(form:NgForm)
{
this.wait=true;

}
}
