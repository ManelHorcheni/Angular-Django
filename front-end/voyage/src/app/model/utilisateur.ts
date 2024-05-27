import { Binary } from "@angular/compiler"

export class Utilisateur {
    //user 
    id?:number;
    name?:string ;
    username?:string;
    email?: string;
    password?: string;
    adresse? : string;
    photo?:Binary;
    gender? : string;

    public static clone(src: Utilisateur, dest : Utilisateur):void {
        dest.id = src.id;
        dest.name = src.name;
        dest.username = src.username;
        dest.password = src.password;
        dest.email = src.email;
        dest.adresse = src.adresse;
        dest.photo = src.photo;
        dest.gender = src.gender;  
      }
}
