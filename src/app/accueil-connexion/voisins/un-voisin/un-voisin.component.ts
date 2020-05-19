import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-un-voisin',
  templateUrl: './un-voisin.component.html',
  styleUrls: ['./un-voisin.component.scss']
})
export class UnVoisinComponent implements OnInit {

  constructor() { }
  @Input() voisin;
  
  ngOnInit(): void {
  }

}
