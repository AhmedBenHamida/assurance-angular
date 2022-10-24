import { Preuve } from "./preuve.model";
import { Project } from "./project.model";

export class Fiche {
    id!: number;
	elementImpacte !:String;
	senario!:String
	reference !:String;
	titre !:String;
	risque !:String;
	description !:String;
	preuve !:Preuve[];
	recommandation !:String;
	type !:String;
	complexite !:String;
	priorite !:String;
	cvssVector !:String;
	cvssScore !:number;
	av !:String;
	ac !:String;
	pr !:String;
    ui !:String;
	s !:String;
	c !:String;
	i !:String;
	a !:String;
	project!:Project;
}
