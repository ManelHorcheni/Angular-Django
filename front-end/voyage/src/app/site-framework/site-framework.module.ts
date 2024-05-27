import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';
import { DetailsPostComponent } from '../details-post/details-post.component';
import { PostComponent } from '../post/post.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from '../home/home.component';
import { OutletContext } from '@angular/router';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppComponent,
    DetailsPostComponent,
    PostComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,

  ]
})
export class SiteFrameworkModule { }
