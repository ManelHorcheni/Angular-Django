/* import { CanActivate, ActivatedRouteSnapshot } from "@angular/router";

import {ActivatedRoute, Router, RouterStateSnapshot} from "@angular/router";
import { Injectable } from '@angular/core';


import { mergeMap, map, take } from 'rxjs/operators';

import { UtilisateurService } from "../service/utilisateur.service";

@Injectable({
  providedIn: 'root'
})
export class LoginActivate implements CanActivate {
  constructor(private utilisateurService: UtilisateurService, private router: Router) {
  }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    return this.utilisateurService.userConnectedObservable.pipe(map(userConnected => {
      if (!userConnected || !userConnected.id) {
        return true;
      }

      this.router.navigateByUrl('calendar/view-all-event');

      return false;
    }));

  }
} */
