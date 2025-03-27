import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [RouterLinkActive],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.css'
})
export class AsideComponent {

  constructor(private router: Router) {}



  onItemClick(item: string): void {
    switch (item) {
        case 'Dashboard':
          this.router.navigate([{ outlets: { outlet2: ['home'] } }]);
            break;
        case 'Products':
          this.router.navigate([{ outlets: { outlet2: ['product'] } }]);
            break;
        case 'Categories':
            console.log("Navigating to Categories...");
            break;
        case 'Orders':
            console.log("Navigating to Orders...");
            break;
        case 'Billing':
            console.log("Navigating to Billing...");
            break;
        case 'Sellers / Vendors':
            console.log("Navigating to Sellers / Vendors...");
            break;
        case 'Customers':
            console.log("Navigating to Customers...");
            break;
        case 'Reviews':
            console.log("Navigating to Reviews...");
            break;
        default:
            console.log("Unknown menu item clicked.");
    }
}


}
