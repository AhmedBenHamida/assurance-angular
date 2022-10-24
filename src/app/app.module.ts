import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';

import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { FicheComponent } from './fiche/fiche.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddFicheComponent } from './fiche/add-fiche/add-fiche.component';
import { OneFicheComponent } from './fiche/one-fiche/one-fiche.component';
import { ProjectComponent } from './project/project.component';
import { AddProjectComponent } from './project/add-project/add-project.component';
import { RapportComponent } from './rapport/rapport.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    FicheComponent,
    AddFicheComponent,
    OneFicheComponent,
    ProjectComponent,
    AddProjectComponent,
    RapportComponent
    
  ], 
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule, 
    
    
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
