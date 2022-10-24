import { Component, OnInit } from '@angular/core';
import { FicheService } from '../_services/fiche.service';
import { MatTableDataSource } from '@angular/material/table';

//@ts-ignore
import * as cvss from "cvss"
import { Fiche } from '../models/fiche.model';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-fiche',
  templateUrl: './fiche.component.html',
  styleUrls: ['./fiche.component.css']
})
export class FicheComponent implements OnInit {

  dataSource!: MatTableDataSource<any>;

  fiches!: Fiche[]
  baseScore!: any;
  id!:any;
  fiche!:Fiche;


  constructor(private ficheService: FicheService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');

    this.ficheService.getAllByProject(this.id).subscribe((resultat)=>{
      console.log(resultat);
      this.fiches=resultat;
      this.dataSource = new MatTableDataSource(resultat);
    },
    (error)=>{
      console.log(error.status)
    }
  );


  this.ficheService.getOne(this.fiches[this.fiches.length-1].id).subscribe((res)=>{
    console.log(res);
    this.fiche=res;
    this.fiche.cvssVector=this.makeVector(this.fiche);
    this.fiche.cvssScore=cvss.getScore(this.fiche.cvssVector);

  },
  (error)=>{
    console.log(error.status)
  }
  );
  



  }

   makeVector(fiche:Fiche):string {
    var s = 'CVSS:3.0/AV:'+fiche.av+'/AC:'+fiche.ac+'/PR:'+fiche.pr+'/UI:'+fiche.ui+'/S:'+fiche.s
    +'/C:'+fiche.c+'/I:'+fiche.i+'/A:'+fiche.a

    return s;

    
  }
  show(fiche:Fiche){
    console.log(fiche);
    this.fiche=fiche;
  }
  rapport(fiches:Fiche[]){
    console.log(fiches);
    this.fiches=fiches;
    this.fiche=fiches[1]
  }

  addFiche(event:any){
    

    let close = document.getElementById("close");
    close?.click();
    console.log(event[0])
    console.log(event[1])
    event[0].cvssVector=this.makeVector(event[0]);
    let v= this.makeVector(event[0])
    let x:number = cvss.getScore(v);
    console.log(v)
    console.log(x)

    event[0].cvssScore=x;

    
    console.log(x)
    console.log(event[0])


    if(event[0].cvssScore<3.9){
      event[0].risque="Faible"
    }else if(event[0].cvssScore<7){
      event[0].risque="Moyen"
    }else if(event[0].cvssScore<9){
      event[0].risque="Fort"
      
    }else {
      event[0].risque="Critique"
      
    }
    let d = JSON.stringify(event[0])
    let data= new FormData();
    data.append("r",d)
    data.append("proj",this.id)
    let arr:File[]=event[1]
    arr.forEach(element => {
      data.append("file",element)
    });
      

    
    
    this.ficheService.addFiche(data).subscribe((resultat)=>{
      this.fiches.push(resultat);
        console.log(resultat);
        this.fiche=resultat;
         
       
      },
      (error)=>{
        console.log(error.status)
      }
    );
    
    
    //this.ficheService.addPreuve(fiche.preuve);
        
    
    

  }

}

