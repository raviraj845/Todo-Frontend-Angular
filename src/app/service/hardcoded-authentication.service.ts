import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username, password){
    console.log('before '+ this.isUserLoggedIn());
    if(username==='in28Minutes' && password==='dummy'){
      sessionStorage.setItem('authenticatorUser',username);

      console.log('after'+this.isUserLoggedIn());
      return true;
    }else{
      return false;
    }

  }

  isUserLoggedIn(){
   let user=  sessionStorage.getItem('authenticatorUser');
   return !(user===null);
  }

  logout(){
    sessionStorage.removeItem('authenticatorUser')
  }
}
