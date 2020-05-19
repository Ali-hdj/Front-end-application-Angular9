import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-un-rendez-vous',
  templateUrl: './un-rendez-vous.component.html',
  styleUrls: ['./un-rendez-vous.component.scss']
})
export class UnRendezVousComponent implements OnInit {

  constructor() { }
  @Input() rendez_vous
  ngOnInit(): void {
  }

}
