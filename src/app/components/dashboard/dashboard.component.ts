import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../../comman/navbar/navbar.component";
import { AsideComponent } from "../../comman/aside/aside.component";
import { Router } from '@angular/router';
import { HeroComponent } from '../../aside-secssion/hero/hero.component';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [AsideComponent,NavbarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{

  constructor(private router:Router){}

  ngOnInit(): void {
    
      this.router.navigate([{ outlets: { outlet2: ['home'] } }]);
    
  }

}
