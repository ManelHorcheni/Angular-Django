import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterLink , RouterOutlet} from '@angular/router';
import { Route , Router } from '@angular/router';
import { AppComponent } from '../../app.component';
import { DetailsPostComponent } from '../../details-post/details-post.component';
import { OutletContext } from '@angular/router';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    AppComponent,
    DetailsPostComponent,
    RouterOutlet,
    
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  
};
