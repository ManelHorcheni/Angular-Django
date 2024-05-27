import { Component } from '@angular/core';
import { RouterLink, RouterOutlet , Route , Router} from '@angular/router';
import { FooterComponent } from './site-framework/footer/footer.component';
import { HeaderComponent } from './site-framework/header/header.component';
import { PostComponent } from './post/post.component';
import { DetailsPostComponent } from './details-post/details-post.component';
import { OutletContext } from '@angular/router';
import { RouterModule  } from '@angular/router';
import { FormsModule } from '@angular/forms';
//import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import {provideHttpClient} from '@angular/common/http';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    //BrowserModule,
    //RouterOutlet,
    //RouterLink,
    //FooterComponent,
    //HeaderComponent,
    //PostComponent,
    RouterModule,
    //DetailsPostComponent,
    //BrowserModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
  
  ],
  

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'voyage';
}
