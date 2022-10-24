import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Fiche } from '../models/fiche.model';
import { Project } from '../models/project.model';
import { ProjectService } from '../_services/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  projects: Project[]=[]
  project!:Project
  fiche!:Fiche;
  fiches!:Fiche[];




  constructor(private projectService:ProjectService) { }

  ngOnInit(): void {
    this.projectService.getAll().subscribe((resultat)=>{
      console.log(resultat);
      this.projects=resultat;
    },
    (error)=>{
      console.log(error.status)
    }
  );
  }
  
  addProject(project:Project){
    

    let close = document.getElementById("close");
    close?.click();
    console.log(project)
    this.projectService.addProject(project).subscribe((resultat)=>{
      this.projects.push(resultat);
        console.log(resultat);

      },
      (error)=>{
        console.log(error.status)
      }
    );    
    
    

  }

}
