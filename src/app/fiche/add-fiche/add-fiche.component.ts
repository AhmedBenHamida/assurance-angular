import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Fiche } from 'src/app/models/fiche.model';
import { Preuve } from 'src/app/models/preuve.model';
import { FicheService } from 'src/app/_services/fiche.service';

@Component({
  selector: 'app-add-fiche',
  templateUrl: './add-fiche.component.html',
  styleUrls: ['./add-fiche.component.css']
})
export class AddFicheComponent implements OnInit {

  mydiv!:any;
 
  constructor( private ficheService: FicheService) { }
  @Input() fiche: Fiche = new Fiche;
  @Output() notif = new EventEmitter<any[]>();

  files:File[]= [];
  preuves:Preuve[] =[{
    fiche:this.fiche,
    id: 0,
    file:"",
    note:""
  }];
  preuve!:Preuve;
  emmision: any[]=[];

  ngOnInit(): void {
  }
  sendDataToParent(f: any) {  
    f.preuve=this.preuves;
    this.emmision.push(f);
    this.emmision.push(this.files);
    this.notif.emit(this.emmision);
  } 

  onfile(event:any){
    this.files.push(event.target.files[0]); 

  }


addPreuve() {
  this.preuves.push({
    id:0,
    file: '',
    note: '',
    fiche:this.fiche
  });


}

removePreuve(i: number) {
  this.preuves.splice(i, 1);
}

logValue() {
  
  //this.ficheService.addPreuve(this.preuves)
  
}


 /** addPreuveFields() {
    
    var mydiv = document.getElementById("fieldContainer");

    const input = document.createElement('input');
    input.type = 'file';
    input.name = "file"
    input.className="form-control"

    const label = document.createElement("label")
    label.className="form-label "
    label.textContent="Preuve"
    
    mydiv!.appendChild(label);
    mydiv!.appendChild(input);
    this.addPreuveNoteFields()
    
   
    
}


addPreuveNoteFields() {
  var mydiv = document.getElementById("fieldContainer2");


  const input2 = document.createElement('input');
    input2.type = 'text';
    input2.name = "note"; // Some dynamic name logic
    input2.className="form-control"

    const label2 = document.createElement("label")
    label2.className="form-label"
    label2.textContent="Note sur preuve"
    mydiv!.appendChild(label2);
    mydiv!.appendChild(input2);

} */


}
