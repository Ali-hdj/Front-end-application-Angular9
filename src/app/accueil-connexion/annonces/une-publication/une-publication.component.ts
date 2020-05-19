import { Component, OnInit, Input } from '@angular/core';
import { connexionService } from 'src/app/services/service.connexion';

@Component({
  selector: 'app-une-publication',
  templateUrl: './une-publication.component.html',
  styleUrls: ['./une-publication.component.scss']
})
export class UnePublicationComponent implements OnInit {

  @Input() publication;

  constructor(private connexion:connexionService) { }

  ngOnInit(): void {
  }

  onSupprimer()
  {

    this.connexion.supprimerAnnonce(this.publication.id)
  }
}
