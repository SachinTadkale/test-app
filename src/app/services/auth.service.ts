import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = 'http://localhost:8080/api/admin/login'; // Login API
  private registerUrl = 'http://localhost:8080/api/admin/register'; // Register API

  constructor(private http: HttpClient) {}

  login(credentials: { username: string; password: string }): Observable<any> {
    return this.http.post<any>(this.loginUrl, credentials);
  
  }

  register(user: { username: string; password: string; email: string }): Observable<any> {
    return this.http.post<any>(this.registerUrl, user);
  }


  
}
