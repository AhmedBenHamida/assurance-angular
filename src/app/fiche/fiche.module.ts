import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddFicheComponent } from './add-fiche/add-fiche.component';
import { ListFicheComponent } from './list-fiche/list-fiche.component';
import { FicheRoutingModule } from './fiche-routing.module';
import { FicheComponent } from './fiche.component';
import { OneFicheComponent } from './one-fiche/one-fiche.component';





@NgModule({
  declarations: [
    AddFicheComponent,
    ListFicheComponent,
    FicheComponent,
    OneFicheComponent
  ],
  imports: [
    CommonModule,
    FicheRoutingModule,
    
  ]
})
export class FicheModule { }
