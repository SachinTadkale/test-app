import { Component } from '@angular/core';
import { HomeNavComponent } from '../../Components/navbar/home-nav/home-nav.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [HomeNavComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

}
