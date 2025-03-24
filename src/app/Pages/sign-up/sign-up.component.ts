import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from '../../Services/signup.service';
import { signup_data } from '../../model/signup-data';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'], // ✅ Fixed styleUrls
})
export class SignUpComponent {
  signupData: signup_data = {
    full_name: '',
    email: '',
    store_type: '',
    role: '',
    password: '',
  };
  confirm_password = '';

  constructor(private signup_service: SignupService, private router: Router) {} // ✅ Inject Router

  OnSignUp() {
    if (
      this.signupData.full_name &&
      this.signupData.email &&
      this.signupData.password &&
      this.signupData.role &&
      this.signupData.store_type
    ) {
      if (this.signupData.password === this.confirm_password) {
        this.signup_service.storeSignupDetails(this.signupData);
        alert('SignUp Successful');

        // ✅ Redirect to login page after signup
        this.router.navigate(['/login']);

        // ✅ Reset form
        this.signupData = {
          full_name: '',
          email: '',
          store_type: '',
          role: '',
          password: '',
        };
        this.confirm_password = ''; // Clear confirm password
      } else {
        alert('Password Does Not Match');
      }
    } else {
      alert('Invalid Credentials');
    }
  }
}
