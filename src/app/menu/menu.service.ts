import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  cart_list : any;
  constructor(public http:HttpClient) { }
  getAllMenu() {
    return this.http.get('/menu/view');
  }

  AddCart(a:any,c:any[]){
    return this.http.post('/cart/InsertCart',({user_id:a,
    menu:c}))
  }

  getCart(){
    const id=sessionStorage.getItem("_id");
    return this.http.get(`/cart/viewCart/${id}`);
  }

  getcartitems(x){
    return this.http.post("/cart/viewCartItems",x)
  }
}
