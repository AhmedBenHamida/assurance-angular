import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import jsPDF, { HTMLOptions, RGBAData } from 'jspdf';
import { Fiche } from '../models/fiche.model';
import * as html2canvas from 'html2canvas';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import DomToImage from 'dom-to-image';


const htmlToPdfmake = require("html-to-pdfmake");

(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;



@Component({
  selector: 'app-rapport',
  templateUrl: './rapport.component.html',
  styleUrls: ['./rapport.component.css']
})
export class RapportComponent implements OnInit {


  @Input() fiches: Fiche[] =[];

  @ViewChild('invoice') invoiceElement!: ElementRef;

  fiche!: Fiche;
  constructor() { }

  ngOnInit(): void {
  }



  show(fiche: Fiche) {
    console.log(fiche);
    this.fiche = fiche;
  }

  public generatePDF(): void {
/**
    const dashboard = this.invoiceElement.nativeElement.innerHTML;

    const dashboardHeight = dashboard.clientHeight;
    const dashboardWidth = dashboard.clientWidth;
    const options = { background: 'white', width: dashboardWidth, height: dashboardHeight };

    DomToImage.toPng(dashboard, options).then((imgData) => {
         const doc = new jsPDF(dashboardWidth > dashboardHeight ? 'l' : 'p', 'mm', [dashboardWidth, dashboardHeight]);
         const imgProps = doc.getImageProperties(imgData);
         const pdfWidth = doc.internal.pageSize.getWidth();
         const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

         doc.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
         doc.save('Dashboard for hyperpanels.pdf');
    });
 */



   /** var doc = new jsPDF();

    var bodyContent = doc.splitTextToSize(this.invoiceElement.nativeElement.innerHTML, 250);
    var pageHeight = doc.internal.pageSize.getHeight();
   

    var y = 15;
    for (var i = 0; i < bodyContent.length; i++) {
      if (y+10 > pageHeight) {
        y = 15;
        doc.addPage();
      }
      doc.text( bodyContent[i], 10, y,);
      y = y + 7;
    }    
     doc.output('dataurlnewwindow');
     */
    /*
    const pdfTable = this.pdfTable.nativeElement;
    var html = htmlToPdfmake( pdfTable.innerHTML); 
    html=JSON.stringify(html);
    var parser = new DOMParser();
    var doc = parser.parseFromString(html, 'text/html');
    const documentDefinition = { content: doc};
    
  
    pdfMake.createPdf(documentDefinition).open(); 

         */     
    /**const pdfTable = this.invoiceElement.nativeElement;
    var html = htmlToPdfmake(pdfTable.innerHTML);
    html.dom=JSON.stringify(html);
    html.dom=JSON.parse(html.dom);
    pdfMake.createPdf( html.dom).open();*/
   
    //pdfMake.createPdf(documentDefinition).download(); 



        

    /**
    (html2canvas as any)(this.invoiceElement.nativeElement, { scale: 3 }).then((canvas: { toDataURL: (arg0: string) => any; height: number; width: number; }) => {
       
       const imageGeneratedFromTemplate = canvas.toDataURL('image/png');
       const fileWidth = 200;
       const generatedImageHeight = (canvas.height * fileWidth) / canvas.width;
       let PDF = new jsPDF('p', 'mm', 'a4',);
       PDF.addImage(imageGeneratedFromTemplate, 'PNG', 0, 5, fileWidth, generatedImageHeight);
       PDF.html(this.invoiceElement.nativeElement.innerHTML)//autoPaging
                           
       
      PDF.save('Rapport.pdf');
  
     });
     */
 
  }

}
