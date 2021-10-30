import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserCrudService {

  constructor(public http:HttpClient) { }
  getListOne(id:any){
    return this.http.get(`/profile/data/${id}`)
  }
  getUpdate(user:any, id:any){
    return this.http.put(`/profile/update/${id}`,user)
  }
 getFoodOne(id:any){
  return this.http.get(`/profile/food/${id._id}`)
}
}
