import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { 
  }

  findUsers(){
    return this.httpClient.get('http://localhost:3000/user');
  }

  findUser(id:number){
    return this.httpClient.get('http://localhost:3000/user/' + id);
  }

  createUser(payload:any){
    return this.httpClient.post('http://localhost:3000/user', payload);
  }

  updateUser(id:number, payload:any){
    return this.httpClient.put('http://localhost:3000/user/' + id, payload);
  }

  deleteUser(id:number){
    return this.httpClient.delete('http://localhost:3000/user/' + id);
  }
}
