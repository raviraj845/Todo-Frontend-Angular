import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

export class HelloWorldBean{
constructor(private message:string){}

}

@Injectable({
  providedIn: 'root'
})
export class WecomeDataService {

  constructor(private http:HttpClient) { }
  executeHelloWorldBeanService(){
    //console.log("Execute Hello World Bean Service")

    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean');
  }

  executeHelloWorldBeanServiceWithPathVariable(name){


    // let basicAuthHeaderString=this.createBasicAuthenticationHttpHeader();

    // let headers=new HttpHeaders({
    //   Authorization: basicAuthHeaderString

    // }); 
    

    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`,
    // {headers}
    );
  }
  // createBasicAuthenticationHttpHeader(){
  //   let username='in28Minutes'
  //   let password='dummy'
  //   let basicAuthHeaderString='Basic '+ window.btoa(username + ':' + password)

  //   return basicAuthHeaderString;
  // }
}
