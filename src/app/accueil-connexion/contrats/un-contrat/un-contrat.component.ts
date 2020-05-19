import { Component, OnInit, Input } from '@angular/core';
import * as jspdf from 'jspdf';
import * as  html2pdf from 'html2pdf.js';


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

  exportAsPDF()
      {
       
        const option ={
          filename : "contrat_de_location",
          image :{type:'jpeg'},
          html2canvas :{},
          jsPDF :{orientation :'landscape'}
        }


        const content : Element=document.getElementById('print')
        html2pdf().from(content).set(option).save();
      }
       
}
