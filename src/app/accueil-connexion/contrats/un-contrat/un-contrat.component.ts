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
  print=false;
  ngOnInit(): void {
  }

  exportAsPDF()
      {
        this.print=true;
        const option ={
          
          filename : "contrat_de_location",
          image :{type:'jpeg'},
          html2canvas :{},
          jsPDF :{orientation :'portrait'}
        }


       let content =`<div style="padding:100px;border:solid deepPink 10px;height:100vh"><img src='/../../../assets/images/logo.jpg'><br><h1 style="position:relative;left:30%;"> CONTRAT DE LOCATION </h1> <strong>Nom du voisin 1 :</strong>${this.contrat.nom_1}<br><strong>Nom du voisin 2 </strong>:${this.contrat.nom_1}<br><p>ont etabli un contrat de location numero 120254 sur le site DIY-BRICO</p><br><strong>Pour un Prix de ${this.contrat.montant} € </strong> </div>`;

       
     
        html2pdf().from(content).set(option).save();
        this.print=false;
        

        console.log(content)
      }
       
}
