import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-un-contrat',
  templateUrl: './un-contrat.component.html',
  styleUrls: ['./un-contrat.component.scss']
})
export class UnContratComponent implements OnInit {
@Input() contrat;
  constructor() { }

  ngOnInit(): void {
  }

}
