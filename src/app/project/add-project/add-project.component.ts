import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Project } from 'src/app/models/project.model';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  constructor() { }
  @Input() project: Project = new Project;
  @Output() notif = new EventEmitter<Project>();


  ngOnInit(): void {


  }



  sendDataToParent(f:Project){
    this.notif.emit(f);
  }
}
