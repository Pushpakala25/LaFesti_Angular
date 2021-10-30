import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogregService {

  constructor(public http:HttpClient) { }
  adduser(newuser:any) {
    return this.http.post('/logreg/register', newuser);
  }

  getusers() {
    return this.http.get('/logreg/loginuser');
  }
  forgotpassword(info:any){
    return this.http.put(`/logreg/forgotpassword/${info._id}`, info);
  }
  addaddress(address:any) {
    return this.http.post('/logreg/address', address);
  }
}
