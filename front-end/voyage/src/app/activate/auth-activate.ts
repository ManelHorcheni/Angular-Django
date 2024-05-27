/* import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { ConnectActivate } from './activate/auth-activate';
//import { LoginActivate } from './activate/login.activate';
import { LoginComponent } from '../login/login.component';


const routes: Routes = [
  {path:'',redirectTo:'calendar/view-all-event',pathMatch:'full'},
  { path: 'login', component: LoginComponent,canActivate:[LoginActivate] },
  { path: 'sign-up', component: InscriptionComponent,canActivate:[LoginActivate] },
  {path:"**",redirectTo:'calendar/view-all-event',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } */
