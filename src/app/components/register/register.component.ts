import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule,RouterLink],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username = '';
  password = '';
  email = '';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  onRegister(): void {
    const newUser = { username: this.username, password: this.password, email: this.email };

    this.authService.register(newUser).subscribe({
      next: (response) => {
        console.log('Registration successful:', response);
        alert('Registration successful! You can now log in.');
        this.router.navigate(['/login']); // Redirect to login
      },
      error: (err) => {
        this.errorMessage = err.message;
      }
    });
  }
}
