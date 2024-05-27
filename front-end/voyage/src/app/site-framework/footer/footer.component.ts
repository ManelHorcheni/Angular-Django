import { Component } from '@angular/core';
import { DetailsPostComponent } from '../../details-post/details-post.component';
import { OutletContext } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    DetailsPostComponent
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
