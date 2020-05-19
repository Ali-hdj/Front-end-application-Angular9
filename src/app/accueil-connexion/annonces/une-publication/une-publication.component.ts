import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-une-publication',
  templateUrl: './une-publication.component.html',
  styleUrls: ['./une-publication.component.scss']
})
export class UnePublicationComponent implements OnInit {

  @Input() publication;

  constructor() { }

  ngOnInit(): void {
  }

}
