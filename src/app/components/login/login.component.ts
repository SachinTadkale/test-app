import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {
    const credentials = { username: this.username, password: this.password };
    
    this.authService.login(credentials).subscribe({
      next: (response) => {
        console.log('Login successful:', response);
        alert('Login successful!');
        localStorage.setItem('authToken', response.token); // Store token in localStorage
        localStorage.setItem('username', this.username); // Store username if needed
        this.router.navigate(['/dashboard']); // Redirect after login
      },
      error: (err) => {
        alert("Invalid credentials");
        console.log(err.message);
        this.errorMessage = err.message;
      }
    });
  }
}
