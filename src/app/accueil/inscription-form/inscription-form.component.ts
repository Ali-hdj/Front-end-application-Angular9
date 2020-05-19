import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-inscription-form',
  templateUrl: './inscription-form.component.html',
  styleUrls: ['./inscription-form.component.scss']
})
export class InscriptionFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onSubmitInscription(form : NgForm)
  {
    console.log(form.value);

  }
}
