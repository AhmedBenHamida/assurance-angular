import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  baseurl="http://localhost:8090/"
  constructor(private http:HttpClient) { }


  getAll():Observable<Project[]>{
    return this.http.get<Project[]>(this.baseurl+'projects');
  }

  addProject(project:Project){
   
    return this.http.post<Project>(this.baseurl+'addProject',project)
  }


}
