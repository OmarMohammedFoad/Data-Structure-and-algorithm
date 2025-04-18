import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Iuser from '../interface/userItems';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private readonly URL = 'http://localhost:3000/users';

  constructor(private readonly http: HttpClient) {}
  getAllUsers() {
    return this.http.get(this.URL);
  }

  getUserById(id: number) {
    console.log('${this.URL}/${id}', `${this.URL}/${id}`);

    return this.http.get(`${this.URL}/${id}`);
  }

  addUser(user:Iuser){
    return this.http.post(this.URL,user);
  }

  deleteUser(id:number){
    return this.http.delete(`${this.URL}/${id}`);
  }

  updateUser(id:number,user:Iuser){
    return this.http.put(`${this.URL}/${id}`,user);

  }
}
