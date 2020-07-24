import { Injectable } from '@angular/core';
import { Todo } from 'src/app/list-todos/list-todos.component';
import { HttpClient } from '@angular/common/http';
import { API_URL, API_JPA_URL } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http:HttpClient) { }

  retrieveAllTodos(username){
    

    return this.http.get<Todo[]>(`${API_JPA_URL}/users/${username}/todos`);
  }

  retrieveTodoById(username,id){

    return this.http.get<Todo>(`${API_JPA_URL}/users/${username}/todos/${id}`)
  }

  deleteTodoById(username,id){

    return this.http.delete(`${API_JPA_URL}/users/${username}/todos/${id}`)
  }

  updateTodo(username,id, Todo){

    return this.http.put(`${API_JPA_URL}/users/${username}/todos/${id}`,Todo)
  }


  createTodo(username, Todo){

    return this.http.post(`${API_JPA_URL}/users/${username}/todos`,Todo)
  }





}
