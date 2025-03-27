import { Component } from '@angular/core';
import { HomeNavComponent } from '../../Components/navbar/home-nav/home-nav.component';
import { FooterComponent } from '../../Components/footer/footer.component';
import { LandingComponent } from '../landing/landing.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeComponent,HomeNavComponent,FooterComponent,LandingComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
