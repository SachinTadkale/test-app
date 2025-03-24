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
  getDetails(){
    return this.SignupDetails;
  }
}
