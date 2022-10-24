import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fiche } from '../models/fiche.model';
import { Preuve } from '../models/preuve.model';

@Injectable({
  providedIn: 'root'
})
export class FicheService {
  baseurl="http://localhost:8090/"
  
  constructor(private http:HttpClient) { }

  getAll():Observable<Fiche[]>{
    let headers = new HttpHeaders().set( 'Access-Control-Allow-Origin','*')
    return this.http.get<Fiche[]>(this.baseurl+'fiches',{headers});
  }
  getAllByProject(id:number):Observable<Fiche[]>{
    let headers = new HttpHeaders().set( 'Access-Control-Allow-Origin','*')
    
    return this.http.get<Fiche[]>(this.baseurl+'fiches/'+id,{headers});
  }

  getOne(fiche:any):Observable<any>{
    let headers = new HttpHeaders().set( 'Access-Control-Allow-Origin','*')

    return this.http.get<Fiche>(this.baseurl+'fiche/'+fiche,{headers});
  }
  addFiche(fiche:FormData){
    let headers = new HttpHeaders().set('Content-Type', 'multipart/form-data');
    return this.http.post<Fiche>(this.baseurl+'addFiche',fiche)
  }
  addPreuve(preuves:any){
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    headers.set( 'Access-Control-Allow-Origin','*')
    console.log(preuves)
    return this.http.post(this.baseurl+'addPreuve',preuves,{headers}) .subscribe(
      res =>{
          console.log(res);
      },
      err => {
          console.log(err.message);
      }
  );
  }


}
