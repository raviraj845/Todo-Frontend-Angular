import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WecomeDataService } from '../service/data/wecome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  message='some message';
  messageFromWelcomeService:string;
  errorMessage:string;
  name='';

  constructor(
    private route:ActivatedRoute,
    private service:WecomeDataService) { }

  ngOnInit(): void {
    
    this.name=this.route.snapshot.params['name'];
  }
  getWelcomeMessage(){
    //console.log('Welcome');

    console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanService().subscribe(

      response=>this.handleSuccessfullResponse(response),
      error=>this.handleErrorResponse(error)
    );

    console.log('last line of getWelcomeMessage')
  }

  getWelcomeMessageWithParameter(){
    

    
    this.service.executeHelloWorldBeanServiceWithPathVariable(this.name).subscribe(

      response=>this.handleSuccessfullResponse(response),
      error=>this.handleErrorResponse(error)
    );

    console.log('last line of getWelcomeMessage')
  }

  handleSuccessfullResponse(response){
    this.messageFromWelcomeService=response.message


  }

  handleErrorResponse(error){

    // console.log(error.error.message);
    
    // console.log(error.message);

    this.errorMessage=error.error.message;
   
  }

}
