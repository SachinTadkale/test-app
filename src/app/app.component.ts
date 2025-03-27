import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule], // Ensure proper imports placement
  template: `
    <router-outlet></router-outlet>
    <router-outlet name="outlet2"></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
