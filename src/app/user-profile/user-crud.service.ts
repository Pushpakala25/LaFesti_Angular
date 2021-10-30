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
  getUpdate(user:any){
    return this.http.put(`/profile/update/${user._id}`,user)
  }
 getFoodOne(id:any){
  return this.http.get(`/menu/view/${id._id}`)
}
}
