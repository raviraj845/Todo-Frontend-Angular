import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BasicAuthenticationService } from '../basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicService implements HttpInterceptor {

  constructor(private basicAuthenticationService: BasicAuthenticationService) { }
  intercept(request: HttpRequest<any>, next: HttpHandler) {

    // let username = 'in28Minutes'
    // let password = 'dummy'
    // let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password)

    let username = this.basicAuthenticationService.getAuthenticatedUser();
    let basicAuthHeaderString = this.basicAuthenticationService.getAuthenticatedToken();


    if (username && basicAuthHeaderString) {

      request = request.clone({
        setHeaders: {
          Authorization: basicAuthHeaderString
        }
      }
      )

    }


    return next.handle(request);

  }
}
