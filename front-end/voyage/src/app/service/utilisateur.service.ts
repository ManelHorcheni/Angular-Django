import { Injectable } from '@angular/core';
import { Utilisateur } from '../model/utilisateur';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import {Observable, mergeMap, map} from 'rxjs';
import { Token } from '../model/token';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
//import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  token!: string;

  private readonly API_URL_SIGNUP="http://localhost:8000/utilisateur-signup/";
  private readonly API_URL_LOGIN = "http://localhost:8000/login/";
  //readonly _userConnected = new BehaviorSubject<Utilisateur>(null);
  private dataStore: { user: Utilisateur } = { user : new Utilisateur()};
  //readonly userConnectedObservable = this._userConnected.asObservable();
  public userConnected = new Utilisateur();
  userConnectedObservable: any;

  constructor( private httpClient : HttpClient,private router:Router) {}

  utilisateurSignup(payload: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.httpClient.post(this.API_URL_SIGNUP, payload, { headers });
  } 
  /* utilisateurSignup(user: Utilisateur): Observable<Utilisateur> {
    return this.httpClient.post<Utilisateur>(this.API_URL_SIGNUP, user);
  } */

  utilisateurLogin(user: Utilisateur): Observable<any> {
    return this.httpClient.post<any>(this.API_URL_LOGIN, user);
  } 
  

  
}
