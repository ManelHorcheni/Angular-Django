import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../site-framework/footer/footer.component';
import { HeaderComponent } from '../site-framework/header/header.component';
import { PostComponent } from '../post/post.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    RouterLink,
    FooterComponent,
    HeaderComponent,
    PostComponent
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

}
