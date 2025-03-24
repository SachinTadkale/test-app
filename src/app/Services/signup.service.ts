import { Injectable } from '@angular/core';
import { signup_data } from '../model/signup-data';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private SignupDetails: signup_data[] = [];
  
  constructor() { }

  storeSignupDetails(details: signup_data){
    this.SignupDetails.push(details);
    console.log("Store Details:",this.SignupDetails);
  }
  // getDetails(){
  //   return this.SignupDetails;
  // }
  getUserByEmail(email:string):signup_data | undefined{
    return this.SignupDetails.find((SignupDetails) => SignupDetails.email);
  }
  validateUser(email:string,password:string){
      return this.SignupDetails.some((SignupDetails)=> SignupDetails.email === email && SignupDetails.password === password);
  }
}
