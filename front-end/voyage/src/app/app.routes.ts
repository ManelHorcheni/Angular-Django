
import { RouterModule, Routes } from '@angular/router';
import { DetailsPostComponent } from './details-post/details-post.component';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './site-framework/header/header.component';
import { OutletContext } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { AjouterPostComponent } from './ajouter-post/ajouter-post.component';
import { NgModule } from '@angular/core';
//import { LoginActivate } from './activate/login.activate';


 
export const routes: Routes = [
    { path: '', component:  HomeComponent},
    { path: 'details-post', component:  DetailsPostComponent},
    //{ path: 'login', component: LoginComponent,canActivate:[LoginActivate] },
    { path: 'login', component:  LoginComponent},
    { path: 'header', component:  HeaderComponent},
    { path: 'profile', component:  ProfileComponent},
    { path: 'ajouter-post', component:  AjouterPostComponent}
  
];
