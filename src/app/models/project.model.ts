import { Fiche } from "./fiche.model";

export class Project {
     id!:number;
	 target!:String;
	 phases!:String;
     title!:String;
	 fiches!:Fiche[];
}
