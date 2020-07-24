import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

export class Todo {
 constructor(
   public id:number,
   public description:string,
   public targetDate: Date,
   public done: boolean


 ){}

}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos:Todo[];
  
  message:string;

  // =[
  //   new Todo(1,'Learn Angular',false, new Date()),
  //   new Todo(2,'Learn Salsa',false, new Date()),
  //   new Todo(3,'Visit Dominical Republic',false, new Date())
    
  // ]



  constructor(private todoService:TodoDataService,
    private router:Router) { }

  ngOnInit(): void {

    this.todoReferesh()

    
  }

  todoReferesh(){

    this.todoService.retrieveAllTodos('in28minutes').subscribe(
      response=>{
        console.log(response);
        this.todos=response
      }
      
    )

  }

  deleteTodo(id){

    console.log(`delete todo of ${id}`)
    this.todoService.deleteTodoById('in28minutes',id).subscribe(
      response=>{
        
        this.message=`Delete todo of ${id} is Successfull`;
        this.todoReferesh();
      }
    )

  }
  updateTodo(id){
    console.log(`update ${id}`);
    this.router.navigate([`todos/${id}`]);

  }

  addTodo(){
    this.router.navigate([`todos`,-1]);

  }

}
