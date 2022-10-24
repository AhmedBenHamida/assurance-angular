import { Component, Input, OnInit } from '@angular/core';
import { Fiche } from 'src/app/models/fiche.model';
import { FicheService } from 'src/app/_services/fiche.service';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-one-fiche',
  templateUrl: './one-fiche.component.html',
  styleUrls: ['./one-fiche.component.css']
})
export class OneFicheComponent implements OnInit {


  @Input() fiche: Fiche = new Fiche;
  sanitizer:any;
  
  

  constructor(private ficheService: FicheService, private domSanitizer: DomSanitizer) { }

  ngOnInit() {

this.sanitizer=this.domSanitizer;
    this.ficheService.getOne(this.fiche.id).subscribe((resultat)=>{
      this.fiche=resultat;
    },
    (error)=>{
      console.log(error.status)
    }
  );



  }


}
