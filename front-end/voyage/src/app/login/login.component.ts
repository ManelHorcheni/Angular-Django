import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Utilisateur } from '../model/utilisateur';
import { Router } from '@angular/router';
import { UtilisateurService } from '../service/utilisateur.service';
import { Observable } from 'rxjs';
import { emit } from 'process';
//import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    HttpClientModule,
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  user_created:Utilisateur | undefined;
  public error:boolean=false; 

  emailError: string | undefined;
  passwordError: string | undefined;
  rememberMe: boolean = false;

  constructor(public router:Router,private utilisateurService: UtilisateurService){
    this.emailError = '';
    this.passwordError = '';
  }
  ngOnInit(): void {  }

  utilisateurSignup(f: NgForm) {
    const payload = {
      username: f.value.username, 
      email : f.value.email,
      password: f.value.password
    };
    console.log(f.value);
  
    this.utilisateurService.utilisateurSignup(payload).subscribe(
      data => {
        if (data.user) {
          this.user_created = data.user;
          console.log(data.user);
          this.router.navigateByUrl('login');
          console.log(data.user);
        } else {
          this.error = true;
        }
      },
      error => {
        this.error = true;
      }
    );
  }
  
  
  /* async utilisateurSignup(f:NgForm) {
    //this.on();
    const user = new Utilisateur();
    user.email = f.value.email;
    user.name= f.value.name;
    user.password = f.value.password;
    //user.adresse = f.value.adresse;
    //user.gender = f.value.gender;
    this.utilisateurService.utilisateurSignup(user).subscribe(  data => {
      if(data.id){
        this.user_created = data;
        this.router.navigateByUrl('login')
        //console.log(f.value); 
        //console.log(f.valid);
      }else{
          this.error = true;
      }
    })
  }
 */
/*   utilisateurLogin(f: NgForm) {
    const email = f.value.email;
    const password = f.value.password;
    let error = false;

    if(!email || email.trim().length == 0) {
      // erreur champ vide
      this.emailError = "Please enter your email.";
      error = true;
    }
    else if(!this.validateEmail(email)) {
      // erreur email incorrecte
      this.emailError = "Please enter a valid email.";
      error = true;
    }
    else {
      this.emailError = "";
    }

    if(!password || password.trim().length == 0) {
      // erreur champ vide
      this.passwordError = "Please enter your password.";
      error = true;
    }
    else {
      this.passwordError = "";
    }

    /* if(!error) {
      this.utilisateurService.utilisateurLogin(email, password).then(data=>{
        this.router.navigateByUrl('').then()
        if (this.rememberMe) {
          localStorage.setItem('rememberedEmail', email);
        } else {
          localStorage.removeItem('rememberedEmail');
        }
      },error=> {
        console.log(error)
        this.error = true;
      });
    } */
 /* } */

  utilisateurLogin(g: NgForm) {
    const email = g.value.email;
    const password = g.value.password;
    let error = false;
  
    if (!email || email.trim().length == 0) {
      // erreur champ vide
      this.emailError = "Please enter your email.";
      error = true;
    } else if (!this.validateEmail(email)) {
      // erreur email incorrecte
      this.emailError = "Please enter a valid email.";
      error = true;
    } else {
      this.emailError = "";
    }
  
    if (!password || password.trim().length == 0) {
      // erreur champ vide
      this.passwordError = "Please enter your password.";
      error = true;
    } else {
      this.passwordError = "";
    }
  
    // Autres validations et logique de connexion...
  }
  

  validateEmail(email: string) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
  

}
